import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Loader2, Download } from 'lucide-react';
import Markdown from 'react-markdown';

interface TextbookViewProps {
  content: string | null;
  isLoading: boolean;
  onGenerate: () => void;
  onRegenerateAI?: () => void;
  isCached?: boolean;
  unit: string;
}

export function TextbookView({ content, isLoading, onGenerate, onRegenerateAI, isCached = false, unit }: TextbookViewProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {!content && !isLoading ? (
        <div className="text-center py-20 bg-[#07203F]/40 rounded-[3rem] border border-dashed border-[#D9AA90]/25 text-[#EBDED4]">
          <BookOpen size={64} className="mx-auto text-[#D9AA90]/30 mb-6" />
          <h3 className="text-2xl font-bold mb-2 text-[#EBDED4]">Ready to simplify {unit}?</h3>
          <p className="text-[#EBDED4]/60 mb-8 max-w-sm mx-auto">
            We will fetch the simplified version of this textbook unit focusing on key exam points.
          </p>
          <button
            onClick={onGenerate}
            className="bg-[#A65E46] text-[#EBDED4] px-10 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-transform shadow-md shadow-[#A65E46]/20"
          >
            <Sparkles size={20} className="text-[#D9AA90]" />
            LOAD / GENERATE TEXTBOOK
          </button>
        </div>
      ) : isLoading ? (
        <div className="text-center py-32 space-y-6">
          <Loader2 size={48} className="animate-spin text-[#A65E46] mx-auto" />
          <div className="space-y-2">
            <h3 className="text-xl font-bold animate-pulse text-[#EBDED4]">Checking Syllabus & Database...</h3>
            <p className="text-[#EBDED4]/50 text-sm italic">"Reviewing KSSM standard learning objectives..."</p>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#07203F]/80 border border-[#D9AA90]/25 p-6 rounded-3xl">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A65E46]/20 flex items-center justify-center text-[#D9AA90]">
                    <BookOpen size={24} />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#EBDED4]">Simple Textbook Mode</h3>
                      {isCached && (
                        <span className="text-[10px] font-mono bg-[#A65E46]/20 text-[#D9AA90] border border-[#D9AA90]/30 px-2 py-0.5 rounded-full">
                          Cloud Cached (0 AI)
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#D9AA90] uppercase tracking-widest font-bold">Unit-Aligned Content</p>
                </div>
             </div>
             <div className="flex items-center gap-2">
                {onRegenerateAI && (
                  <button
                    onClick={onRegenerateAI}
                    disabled={isLoading}
                    className="px-4 py-2 rounded-xl bg-[#02000D]/60 hover:bg-[#02000D] border border-[#D9AA90]/25 text-xs text-[#D9AA90] hover:text-[#EBDED4] flex items-center gap-1.5 transition-colors"
                    title="Regenerate with AI"
                  >
                    <Sparkles size={13} />
                    <span>Regenerate AI</span>
                  </button>
                )}
                <button 
                  onClick={() => {
                    try {
                      window.print();
                    } catch (e) {
                      console.warn('Print not supported in iframe environment:', e);
                    }
                  }}
                  className="p-3 rounded-xl bg-[#02000D]/40 hover:bg-[#A65E46]/20 text-[#EBDED4]/60 hover:text-[#D9AA90] transition-all"
                  title="Print or Save PDF"
                >
                  <Download size={20} />
                </button>
             </div>
          </div>

          <div className="glass-card p-10 rounded-[3rem] border border-[#D9AA90]/20 bg-[#07203F]/60 prose prose-invert max-w-none shadow-2xl text-[#EBDED4]">
            <div className="markdown-body">
              <Markdown>{content}</Markdown>
            </div>
            
            <div className="mt-12 pt-12 border-t border-[#D9AA90]/15 text-center">
                <button
                    onClick={onRegenerateAI || onGenerate}
                    className="text-xs font-bold text-[#D9AA90]/60 hover:text-[#D9AA90] uppercase tracking-[0.3em] transition-colors"
                >
                    • Regenerate Simplified Version with AI •
                </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
