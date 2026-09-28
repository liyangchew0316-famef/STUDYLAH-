import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { PREGENERATED_UNITS, PREGENERATED_STUDY_MATERIALS, findPregeneratedMaterial, findSyllabusPack } from "./src/data/preGeneratedSyllabus";

// Helper for cleaning and parsing JSON responses
function safeParseJson<T>(text: string | undefined | null, fallback: T): T {
  if (!text || !text.trim()) return fallback;
  let cleaned = text.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.warn('Direct JSON parse failed, attempting substring extraction...', err);
    const firstBrace = cleaned.indexOf('{');
    const firstBracket = cleaned.indexOf('[');
    if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
      const lastBrace = cleaned.lastIndexOf('}');
      if (lastBrace > firstBrace) {
        try {
          return JSON.parse(cleaned.substring(firstBrace, lastBrace + 1));
        } catch (e) {
          console.error('Bracket extraction failed:', e);
        }
      }
    } else if (firstBracket !== -1) {
      const lastBracket = cleaned.lastIndexOf(']');
      if (lastBracket > firstBracket) {
        try {
          return JSON.parse(cleaned.substring(firstBracket, lastBracket + 1));
        } catch (e) {
          console.error('Bracket extraction failed:', e);
        }
      }
    }
    return fallback;
  }
}

function findPregeneratedUnits(level?: string, subject?: string): string[] {
  const pack = findSyllabusPack(level || 'Form 1', subject);
  if (pack && pack.units.length > 0) return pack.units;

  return [
    "Unit 1: Introduction & Fundamentals",
    "Unit 2: Core Concepts & Principles",
    "Unit 3: Applications & Practical Inquiry"
  ];
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  const apiKey = process.env.GEMINI_API_KEY || '';
  const ai = new GoogleGenAI({ apiKey });
  // Prioritize stable low-latency flash models with high availability
  const CANDIDATE_MODELS = ["gemini-3.1-flash-lite", "gemini-3.8-flash", "gemini-flash-latest"];

  // Resilient model invocation across available flash models
  async function callGemini(contents: any, config?: any) {
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }
    let lastErr: any = null;
    for (const model of CANDIDATE_MODELS) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config
        });
        if (response) {
          return response;
        }
      } catch (err: any) {
        console.warn(`[Gemini model ${model} unavailable (${err?.status || err?.message}), trying next model...]`);
        lastErr = err;
      }
    }
    throw lastErr;
  }

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", hasApiKey: !!apiKey });
  });

  // 1. Mindmap Generation
  app.post("/api/mindmap", async (req, res) => {
    try {
      const { topic, level, language } = req.body;
      if (!topic) {
        return res.status(400).json({ error: "Topic is required" });
      }

      console.log(`[API /api/mindmap] Generating for: "${topic}" (${level}, ${language})`);
      const response = await callGemini(
        `Generate a detailed and accurate hierarchical mindmap for the topic: "${topic}" suitable for Malaysian ${level || 'Secondary School'} syllabus.
Language instruction: ${language || 'English'}.
Structure the mindmap with 3 to 5 core branches, each having 2 to 3 detailed sub-points. Use accurate KSSM/SPM curriculum concepts.`,
        {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              label: { type: Type.STRING },
              children: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    label: { type: Type.STRING },
                    children: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          label: { type: Type.STRING }
                        },
                        required: ["id", "label"]
                      }
                    }
                  },
                  required: ["id", "label"]
                }
              }
            },
            required: ["id", "label"]
          }
        }
      );

      const parsed = safeParseJson(response.text, null);
      if (!parsed || !parsed.label) {
        throw new Error("Invalid mindmap structure generated");
      }
      return res.json(parsed);
    } catch (err: any) {
      console.error("[API /api/mindmap fallback activated]:", err?.message || err);
      const { topic, subject, language } = req.body || {};
      const pregen = findPregeneratedMaterial('Form 1', subject, topic, language);
      return res.status(200).json(pregen.mindmap);
    }
  });

  // 2. Quiz Generation
  app.post("/api/quiz", async (req, res) => {
    try {
      const { topic, level, language, count } = req.body;
      const numQuestions = Math.min(count || 5, 10);

      console.log(`[API /api/quiz] Generating ${numQuestions} questions for: "${topic}"`);
      const response = await callGemini(
        `Generate ${numQuestions} high-quality multiple choice questions (MCQs) for the topic: "${topic}" for Malaysian ${level || 'Secondary School'} curriculum.
Language instruction: ${language || 'English'}.
Each question must have exactly 4 plausible options, the exact correctAnswer matching one of the options, and a clear explanatory breakdown.`,
        {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctAnswer: { type: Type.STRING },
                explanation: { type: Type.STRING }
              },
              required: ["question", "options", "correctAnswer", "explanation"]
            }
          }
        }
      );

      const parsed = safeParseJson(response.text, []);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error("Failed to parse quiz questions array");
      }
      return res.json(parsed);
    } catch (err: any) {
      console.error("[API /api/quiz fallback activated]:", err?.message || err);
      const { topic, subject, language } = req.body || {};
      const pregen = findPregeneratedMaterial('Form 1', subject, topic, language);
      return res.status(200).json(pregen.quiz);
    }
  });

  // 3. Flashcards Generation
  app.post("/api/flashcards", async (req, res) => {
    try {
      const { topic, level, language, count } = req.body;
      const numCards = Math.min(count || 8, 12);

      console.log(`[API /api/flashcards] Generating ${numCards} cards for: "${topic}"`);
      const response = await callGemini(
        `Generate ${numCards} study revision flashcards for the topic: "${topic}" in Malaysian ${level || 'Secondary School'} syllabus.
Language instruction: ${language || 'English'}.
Front: concise question, formula, or term.
Back: clear explanation, definition, or key exam point.`,
        {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                front: { type: Type.STRING },
                back: { type: Type.STRING }
              },
              required: ["front", "back"]
            }
          }
        }
      );

      const parsed = safeParseJson(response.text, []);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error("Failed to parse flashcards array");
      }
      return res.json(parsed);
    } catch (err: any) {
      console.error("[API /api/flashcards fallback activated]:", err?.message || err);
      const { topic, subject, language } = req.body || {};
      const pregen = findPregeneratedMaterial('Form 1', subject, topic, language);
      return res.status(200).json(pregen.flashcards);
    }
  });

  // 4. Units / Chapters for Syllabus
  app.post("/api/units", async (req, res) => {
    try {
      const { subject, language, forceAI } = req.body || {};
      const pregenUnits = findPregeneratedUnits('Form 1', subject);

      if (!forceAI && pregenUnits.length > 0) {
        return res.json(pregenUnits);
      }

      console.log(`[API /api/units] Fetching units for Form 1 ${subject} in ${language}`);
      const response = await callGemini(
        `List the standard Malaysian textbook unit/chapter titles for Form 1 ${subject}. Return only a simple JSON array of 6 to 13 strings representing Unit 1, Unit 2, etc. Language: ${language || 'English'}.`,
        {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      );

      const parsed = safeParseJson<string[]>(response.text, []);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return res.json(parsed);
      }
      return res.json(pregenUnits);
    } catch (err: any) {
      console.error("[API /api/units fallback activated]:", err?.message || err);
      const { subject } = req.body || {};
      const units = findPregeneratedUnits('Form 1', subject);
      return res.status(200).json(units);
    }
  });

  // 5. Textbook Summary Generation
  app.post("/api/textbook", async (req, res) => {
    try {
      const { unit, level, subject, language } = req.body;
      console.log(`[API /api/textbook] Generating simple textbook for ${unit}`);

      const response = await callGemini(
        [
          { text: `Syllabus: ${level} ${subject}` },
          { text: `Specific Unit/Chapter: ${unit}` },
          { text: `Language: ${language || 'English'}` }
        ],
        {
          systemInstruction: `You are a professional Malaysian textbook editor. 
Your task is to create a "Simple Textbook" version of the specified unit.

STRUCTURE:
1. # [Unit Title]
2. ## Key Concepts (List the most important terms with concise explanations)
3. ## Simplified Explanation (Break down the main mechanisms into easily digestible sections)
4. ## Real-world Examples (Malaysian curriculum context)
5. ## Summary & Exam Tips (3-5 bullet points)

STYLE:
- Use clean Markdown format.
- Maintain academic accuracy while making it simple and engaging.
- Language: ${language || 'English'}`
        }
      );

      return res.json({ content: response.text || '' });
    } catch (err: any) {
      console.error("[API /api/textbook fallback activated]:", err?.message || err);
      const { unit, subject, language } = req.body || {};
      const pregen = findPregeneratedMaterial('Form 1', subject, unit, language);
      return res.status(200).json({ content: pregen.textbook });
    }
  });

  // 6. Tutor Chat
  app.post("/api/tutor", async (req, res) => {
    try {
      const { query, level, subject, language, unit } = req.body;
      console.log(`[API /api/tutor] Query: "${query}" for ${subject}`);

      const response = await callGemini(
        [
          { text: `Syllabus Context: Level: ${level}, Subject: ${subject}${unit ? `, Specific Chapter: ${unit}` : ''}` },
          { text: `Language preference: ${language || 'English'}` },
          { text: `Student's question: ${query}` }
        ],
        {
          systemInstruction: `You are Bijak AI, an expert Malaysian study tutor.
You specialize in the Malaysian KSSM/KBSM/STPM syllabus.
- Be encouraging, clear, and structured.
- If a chapter is given (${unit || 'None'}), focus on that chapter's learning standards.
- Use the student's chosen language: ${language || 'English'}.
- Provide step-by-step explanations and helpful mnemonics where appropriate.`
        }
      );

      return res.json({ response: response.text || "I'm ready to help you explore this topic! What question do you have?" });
    } catch (err: any) {
      console.error("[API /api/tutor fallback activated]:", err?.message || err);
      return res.status(200).json({
        response: `Halo! I'm Bijak AI. I'm here to help you study ${req.body?.subject || 'your subjects'}. Ask me any question about definitions, past exam questions, or step-by-step problem solving!`
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`STUDYLAH Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

