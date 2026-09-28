import React from 'react';
import { motion } from 'motion/react';
import { Languages, Check, Sparkles } from 'lucide-react';

const OPTIONS = [
  { id: 'default', label: 'Use Textbook Default', desc: 'Standard syllabus language' },
  { id: 'bm_en', label: 'BM + English', desc: 'Dual Language Program (DLP) style' },
  { id: 'bm_zh', label: 'BM + Chinese', desc: 'SJKC / Chinese school preference' },
  { id: 'en_zh', label: 'English + Chinese', desc: 'English & Mandarin medium' },
  { id: 'tri', label: 'BM + English + Chinese', desc: 'Trilingual (All 3 major languages)' },
  { id: 'bm', label: 'BM Only', desc: 'Bahasa Melayu medium' },
  { id: 'en', label: 'English Only', desc: 'English medium' },
  { id: 'zh', label: 'Chinese Only', desc: 'Mandarin medium' },
];

interface LanguageAddonProps {
  subject: string;
  defaultLang: string;
  onSelect: (lang: string) => void;
}

export function LanguageAddon({ subject, defaultLang, onSelect }: LanguageAddonProps) {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-16 h-16 rounded-2xl bg-[#A65E46]/15 flex items-center justify-center text-[#D9AA90] mx-auto mb-6"
        >
          <Languages size={32} />
        </motion.div>
        <h2 className="text-4xl font-display font-bold text-[#EBDED4]">Language <span className="text-[#A65E46] italic">Add-on</span></h2>
        <p className="text-[#EBDED4]/60">
          The default language for <span className="text-[#EBDED4] font-bold">{subject}</span> is <span className="text-[#D9AA90] font-bold">{defaultLang}</span>.
          Would you like to add or change it?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {OPTIONS.map((opt, idx) => (
          <motion.button
            key={opt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(opt.id === 'default' ? defaultLang : opt.label)}
            className={`group p-6 rounded-3xl text-left border transition-all flex items-center justify-between ${
              opt.id === 'default' 
                ? 'bg-[#A65E46]/20 border-[#A65E46] shadow-lg shadow-[#A65E46]/10' 
                : 'glass-card bg-[#07203F]/50 border-[#D9AA90]/15 hover:border-[#D9AA90]/40 hover:bg-[#07203F]/80'
            }`}
          >
            <div className="flex items-center gap-4">
              {opt.id === 'default' && <Sparkles className="text-[#D9AA90]" size={20} />}
              <div>
                <div className="font-bold text-lg text-[#EBDED4]">{opt.label}</div>
                <div className="text-[#EBDED4]/50 text-sm">{opt.desc}</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#D9AA90]/30 flex items-center justify-center text-[#D9AA90] opacity-0 group-hover:opacity-100 transition-opacity">
              <Check size={16} />
            </div>
          </motion.button>
        ))}
        
        <div className="md:col-span-2 glass-card p-4 rounded-2xl border-dashed border-[#D9AA90]/20 text-center bg-[#07203F]/40">
            <p className="text-[10px] text-[#EBDED4]/40 uppercase tracking-[0.2em] font-bold">
                Note: BIJAK AI adapts its responses and materials to your selection instantly.
            </p>
        </div>
      </div>
    </div>
  );
}
