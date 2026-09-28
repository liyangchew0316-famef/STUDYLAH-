import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Loader2, Cloud, RefreshCw, Database } from 'lucide-react';

interface ToolLayoutProps {
  title: string;
  description: string;
  onGenerate: (topic: string, customLang?: string, forceAI?: boolean) => void;
  isLoading: boolean;
  children?: React.ReactNode;
  hideInput?: boolean;
  defaultTopic?: string;
  isCached?: boolean;
  onRegenerateAI?: () => void;
}

export function ToolLayout({
  title,
  description,
  onGenerate,
  isLoading,
  children,
  hideInput,
  defaultTopic,
  isCached = false,
  onRegenerateAI
}: ToolLayoutProps) {
  const [topic, setTopic] = useState(defaultTopic || '');
  const [customLang, setCustomLang] = useState('');
  const [showLangInput, setShowLangInput] = useState(false);

  useEffect(() => {
    if (defaultTopic) {
      setTopic(defaultTopic);
    }
  }, [defaultTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onGenerate(topic, customLang.trim() || undefined, false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold text-[#EBDED4]">{title}</h2>
        <p className="text-[#EBDED4]/60">{description}</p>

        {/* Cache status badge */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {isCached ? (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07203F] border border-[#D9AA90]/40 text-[#D9AA90] text-xs font-medium shadow-sm">
              <Cloud size={13} className="text-[#A65E46]" />
              <span>Loaded from Firebase Cloud Cache (0 AI quota used)</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07203F]/60 border border-[#D9AA90]/20 text-[#EBDED4]/70 text-xs">
              <Database size={12} className="text-[#D9AA90]" />
              <span>Firebase Persistence Enabled</span>
            </div>
          )}

          {onRegenerateAI && (
            <button
              onClick={onRegenerateAI}
              disabled={isLoading}
              title="Force re-generation using Gemini AI"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#02000D] border border-[#D9AA90]/25 text-[#EBDED4]/70 hover:text-[#EBDED4] hover:border-[#D9AA90]/60 text-xs transition-colors disabled:opacity-50"
            >
              <Sparkles size={12} className="text-[#D9AA90]" />
              <span>Regenerate with AI</span>
            </button>
          )}
        </div>
      </div>

      {!hideInput && (
        <div className="glass-card p-6 rounded-[2rem] max-w-2xl mx-auto space-y-6 bg-[#07203F]/50 border border-[#D9AA90]/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 p-2 bg-[#02000D]/60 rounded-2xl border border-[#D9AA90]/20">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter topic (e.g. Photosynthesis, Trigonometry...)"
                className="flex-1 bg-transparent px-6 py-4 focus:outline-none text-[#EBDED4] placeholder:text-[#EBDED4]/30"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !topic.trim()}
                className="bg-[#A65E46] hover:bg-[#A65E46]/90 disabled:bg-[#A65E46]/40 disabled:cursor-not-allowed text-[#EBDED4] px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md shadow-[#A65E46]/20"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <Sparkles size={20} className="text-[#D9AA90]" />
                    <span>LOAD / GENERATE</span>
                  </>
                )}
              </button>
            </div>

            <div className="px-2">
              {!showLangInput ? (
                <button 
                  type="button"
                  onClick={() => setShowLangInput(true)}
                  className="text-[10px] font-bold text-[#D9AA90]/80 hover:text-[#D9AA90] uppercase tracking-widest flex items-center gap-1 transition-colors"
                >
                  + Add specific language requirement?
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pt-2"
                >
                  <input
                    type="text"
                    value={customLang}
                    onChange={(e) => setCustomLang(e.target.value)}
                    placeholder="E.g. Explain in BM and Chinese / English only..."
                    className="w-full bg-[#02000D]/50 border border-[#D9AA90]/20 px-4 py-2 rounded-lg text-xs focus:outline-none focus:border-[#D9AA90] text-[#EBDED4] placeholder:text-[#EBDED4]/30"
                  />
                </motion.div>
              )}
            </div>
          </form>
        </div>
      )}

      <div className="pt-8">
        {children}
      </div>
    </div>
  );
}
