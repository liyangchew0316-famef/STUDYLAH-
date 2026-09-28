import { PREGENERATED_UNITS, findPregeneratedMaterial, findSyllabusPack } from '../data/preGeneratedSyllabus';

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

function getFallbackUnits(level: string, subject: string): string[] {
  const pack = findSyllabusPack(level || 'Form 1', subject);
  if (pack && pack.units.length > 0) {
    return pack.units;
  }

  return [
    "Unit 1: Introduction & Fundamentals",
    "Unit 2: Core Concepts & Principles",
    "Unit 3: Advanced Applications",
    "Unit 4: Case Studies & Problem Solving",
    "Unit 5: Revision & Exam Mastery"
  ];
}

// Helper for safe fetch with timeout
async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number = 18000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function generateMindMap(topic: string, level: string, subject: string, language: string): Promise<MindMapNode> {
  const targetLevel = level || 'Form 1';
  try {
    const res = await fetchWithTimeout('/api/mindmap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, level: targetLevel, subject, language })
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data && data.label) {
        return data;
      }
    } else {
      const errJson = await res.json().catch(() => ({}));
      if (errJson.fallback) return errJson.fallback;
    }
  } catch (err) {
    console.warn('generateMindMap fetch fallback:', err);
  }

  // Graceful fallback structure from curated Form 1 materials or dynamic generator
  const mat = findPregeneratedMaterial(targetLevel, subject, topic, language);
  return mat.mindmap;
}

export async function generateQuiz(topic: string, level: string, subject: string, language: string, count: number = 5): Promise<QuizQuestion[]> {
  const targetLevel = level || 'Form 1';
  try {
    const res = await fetchWithTimeout('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, level: targetLevel, subject, language, count })
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } else {
      const errJson = await res.json().catch(() => ({}));
      if (Array.isArray(errJson.fallback)) return errJson.fallback;
    }
  } catch (err) {
    console.warn('generateQuiz fetch fallback:', err);
  }

  const mat = findPregeneratedMaterial(targetLevel, subject, topic, language);
  return mat.quiz;
}

export async function generateFlashcards(topic: string, level: string, subject: string, language: string, count: number = 8): Promise<Flashcard[]> {
  const targetLevel = level || 'Form 1';
  try {
    const res = await fetchWithTimeout('/api/flashcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, level: targetLevel, subject, language, count })
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } else {
      const errJson = await res.json().catch(() => ({}));
      if (Array.isArray(errJson.fallback)) return errJson.fallback;
    }
  } catch (err) {
    console.warn('generateFlashcards fetch fallback:', err);
  }

  const mat = findPregeneratedMaterial(targetLevel, subject, topic, language);
  return mat.flashcards;
}

export async function getUnits(level: string, subject: string, language: string): Promise<string[]> {
  const targetLevel = level || 'Form 1';
  try {
    const res = await fetchWithTimeout('/api/units', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: targetLevel, subject, language })
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } else {
      const errJson = await res.json().catch(() => ({}));
      if (Array.isArray(errJson.fallback)) return errJson.fallback;
    }
  } catch (err) {
    console.warn('getUnits fetch fallback:', err);
  }

  return getFallbackUnits(targetLevel, subject);
}

export async function generateTextbook(unit: string, level: string, subject: string, language: string): Promise<string> {
  const targetLevel = level || 'Form 1';
  try {
    const res = await fetchWithTimeout('/api/textbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ unit, level: targetLevel, subject, language })
    });

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.content === 'string' && data.content.trim()) {
        return data.content;
      }
    }
  } catch (err) {
    console.warn('generateTextbook fetch fallback:', err);
  }

  const mat = findPregeneratedMaterial(targetLevel, subject, unit, language);
  return mat.textbook;
}

export async function chatWithTutor(query: string, level: string, subject: string, language: string, unit?: string): Promise<string> {
  try {
    const res = await fetchWithTimeout('/api/tutor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, level, subject, language, unit })
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.response) {
        return data.response;
      }
    }
  } catch (err) {
    console.warn('chatWithTutor fetch fallback:', err);
  }

  return `Halo! I am your StudyLah tutor. I'm here to help you study **${subject}** (${unit || level}). Feel free to ask your question again!`;
}
