import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, BookOpen } from 'lucide-react';
import { chatWithTutor } from '../../services/gemini';
import ReactMarkdown from 'react-markdown';

interface TutorChatProps {
  level: string;
  subject: string;
  language: string;
  unit: string | null;
}

export function TutorChat({ level, subject, language, unit }: TutorChatProps) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [currentLang, setCurrentLang] = useState(language);
  const [isEditingLang, setIsEditingLang] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isSending]);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      const isGeneral = unit === 'General / All Units';
      setMessages([{
        role: 'ai',
        content: `Hi! I am your **STUDYLAH AI Tutor**. I'm ready to help you with **${subject}** for **${level}**. 
        
${isGeneral 
  ? "I follow the Malaysian national syllabus. What topic would you like to explore today?" 
  : `Great! We are focusing on **${unit}**. What specific concept from this chapter should we break down first?`}`
      }]);
    }
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsSending(true);

    try {
      const response = await chatWithTutor(userMsg, level, subject, currentLang, unit || undefined);
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "Maaf, something went wrong. Let's try that again." }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[700px] flex flex-col glass-card rounded-[2.5rem] overflow-hidden border border-[#D9AA90]/20 shadow-2xl bg-[#02000D]">
      <div className="p-6 bg-[#07203F] border-b border-[#D9AA90]/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#A65E46] flex items-center justify-center text-[#EBDED4] shadow-md shadow-[#A65E46]/20">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#EBDED4]">AI Study Tutor</h3>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#D9AA90] uppercase tracking-widest font-bold">Online • {subject}</span>
              <button 
                onClick={() => setIsEditingLang(!isEditingLang)}
                className="text-[9px] bg-[#02000D]/50 border border-[#D9AA90]/20 px-2 py-0.5 rounded text-[#EBDED4]/60 hover:text-[#D9AA90] transition-colors"
              >
                Lang: {currentLang}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 bg-[#02000D]/60 rounded-full border border-[#D9AA90]/25">
          <BookOpen size={12} className="text-[#D9AA90]" />
          <span className="text-[10px] font-bold text-[#EBDED4]/80">{level} Unit-Aware</span>
        </div>
      </div>

      <AnimatePresence>
        {isEditingLang && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#02000D]/90 border-b border-[#D9AA90]/20 overflow-hidden"
          >
            <div className="p-4 flex gap-2">
              <input 
                type="text" 
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                placeholder="Change language preference (e.g. Chinese only)"
                className="flex-1 bg-[#07203F]/60 border border-[#D9AA90]/25 px-4 py-2 rounded-xl text-xs focus:outline-none focus:border-[#D9AA90] text-[#EBDED4] placeholder:text-[#EBDED4]/30"
              />
              <button 
                onClick={() => setIsEditingLang(false)}
                className="bg-[#A65E46] text-[#EBDED4] px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-[#A65E46]/20"
              >
                OK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#02000D]/40">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-[#07203F] text-[#EBDED4] border border-[#D9AA90]/20' : 'bg-[#A65E46]/20 text-[#D9AA90] border border-[#D9AA90]/30'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-[#A65E46] text-[#EBDED4] font-medium rounded-tr-none shadow-md shadow-[#A65E46]/10' : 'bg-[#07203F]/70 border border-[#D9AA90]/20 text-[#EBDED4] rounded-tl-none'}`}>
              <div className="prose prose-invert prose-sm max-w-none text-current leading-relaxed">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}
        {isSending && (
          <div className="flex items-center gap-2 text-[#D9AA90] text-xs font-bold uppercase tracking-widest animate-pulse ml-11">
            <Loader2 size={12} className="animate-spin" />
            AI is thinking...
          </div>
        )}
      </div>

      <div className="p-6 bg-[#07203F]/90 border-t border-[#D9AA90]/20">
        <form onSubmit={handleSend} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask about ${subject} units...`}
            className="flex-1 bg-[#02000D]/60 border border-[#D9AA90]/20 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D9AA90]/50 transition-all text-[#EBDED4] placeholder:text-[#EBDED4]/30"
          />
          <button
            type="submit"
            disabled={!input.trim() || isSending}
            className="bg-[#A65E46] text-[#EBDED4] p-4 rounded-2xl hover:bg-[#A65E46]/90 transition-all disabled:opacity-50 disabled:grayscale hover:scale-105 active:scale-95 shadow-md shadow-[#A65E46]/20"
          >
            <Send size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}
