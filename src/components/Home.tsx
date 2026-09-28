import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Calculator, 
  Beaker, 
  History, 
  Globe, 
  Cpu, 
  Wrench, 
  Heart,
  Moon,
  CheckCircle2
} from 'lucide-react';

interface HomeProps {
  onSelectLevel: (level: string) => void;
  onQuickSelectSubject?: (subject: string) => void;
}

const FORM_1_SUBJECT_PREVIEWS = [
  { name: 'Mathematics', desc: '13 Bab (Nombor Nisbah, Algebra, Poligon, Pythagoras)', icon: Calculator, color: 'text-amber-300' },
  { name: 'Science', desc: '9 Bab (Penyiasatan, Sel, Jirim, Jadual Berkala, Cahaya)', icon: Beaker, color: 'text-emerald-300' },
  { name: 'History', desc: '8 Bab (Zaman Air Batu, Prasejarah, Tamadun Awal, Tamadun Islam)', icon: History, color: 'text-orange-300' },
  { name: 'Geography', desc: '13 Bab + Lapangan (Bearing, Saliran, Petempatan, Sumber Air, Sisa)', icon: Globe, color: 'text-cyan-300' },
  { name: 'Bahasa Melayu', desc: '18 Tema + Tatabahasa + KOMSAS (Gaya Hidup Sihat hingga Politik)', icon: BookOpen, color: 'text-red-300' },
  { name: 'English', desc: 'Starter + 9 Units + Literature + Grammar (What Do You Like?, Wild Weather)', icon: BookOpen, color: 'text-blue-300' },
  { name: 'ASK', desc: '4 Bab / 6 Bahagian (Pemikiran Komputasional, Data, Python & HTML)', icon: Cpu, color: 'text-purple-300' },
  { name: 'RBT', desc: '5 Bab (Elemen Reka Bentuk, Lakaran, Fertigasi & Fesyen)', icon: Wrench, color: 'text-yellow-300' },
  { name: 'Pendidikan Moral', desc: '17 Unit (4 Bidang: Diri, Keluarga, Komuniti, Peraturan & Hak)', icon: Heart, color: 'text-pink-300' },
  { name: 'Pendidikan Islam', desc: '6 Bidang (30 Pelajaran: Al-Quran, Hadis, Akidah, Fikah, Sirah, Akhlak)', icon: Moon, color: 'text-emerald-400' },
  { name: 'Chinese', desc: '10 单元 + 附录（成长的足迹、学习之乐、传统与味蕾、应用文）', icon: BookOpen, color: 'text-rose-300' }
];

export function Home({ onSelectLevel, onQuickSelectSubject }: HomeProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A65E46]/20 border border-[#D9AA90]/40 text-[#D9AA90] text-xs font-bold tracking-widest uppercase"
        >
          <Sparkles size={14} className="text-[#D9AA90]" />
          <span>Form 1 (Tingkatan 1) • KSSM Official Syllabus</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-[#EBDED4] leading-tight"
        >
          Master Form 1 <span className="gold-text-gradient italic">Curriculum.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#EBDED4]/80 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Your dedicated AI study companion for Malaysian <strong className="text-[#D9AA90]">Form 1 (Tingkatan 1)</strong> students. Explore textbook summaries, mindmaps, quizzes, flashcards, and AI tutor support.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectLevel('Form 1')}
            className="w-full sm:w-auto px-8 py-4 rounded-3xl bg-gradient-to-r from-[#A65E46] to-[#80422e] text-[#EBDED4] font-bold text-base shadow-xl shadow-[#A65E46]/25 border border-[#D9AA90]/40 flex items-center justify-center gap-3 group"
          >
            <GraduationCap size={22} className="group-hover:rotate-12 transition-transform" />
            <span>Start Form 1 Revision (Mula Belajar)</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-[#EBDED4]/60">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#D9AA90]" /> 100% KSSM Form 1 Syllabus</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#D9AA90]" /> Offline-ready Cloud Cache</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#D9AA90]" /> Mindmaps, Textbooks & Quizzes</span>
        </div>
      </div>

      {/* Form 1 Subjects Grid Preview */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-display font-bold text-[#EBDED4]">Form 1 <span className="text-[#A65E46]">Subjects</span></h3>
            <p className="text-xs text-[#EBDED4]/60">Click any subject below to jump directly into its chapters</p>
          </div>
          <button
            onClick={() => onSelectLevel('Form 1')}
            className="text-xs font-bold text-[#D9AA90] hover:text-[#EBDED4] flex items-center gap-1 transition-colors"
          >
            <span>View All Subjects</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FORM_1_SUBJECT_PREVIEWS.map((sub, idx) => (
            <motion.button
              key={sub.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
              whileHover={{ y: -4, borderColor: 'rgba(217, 170, 144, 0.5)', backgroundColor: 'rgba(7, 32, 63, 0.85)' }}
              onClick={() => {
                onSelectLevel('Form 1');
                if (onQuickSelectSubject) onQuickSelectSubject(sub.name);
              }}
              className="glass-card p-5 rounded-3xl border border-[#D9AA90]/15 bg-[#07203F]/50 text-left flex items-start gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#A65E46]/20 flex items-center justify-center text-[#D9AA90] group-hover:bg-[#A65E46] group-hover:text-[#EBDED4] transition-all shrink-0">
                <sub.icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-base text-[#EBDED4] flex items-center justify-between">
                  <span>{sub.name}</span>
                  <ArrowRight size={14} className="text-[#D9AA90] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="text-xs text-[#EBDED4]/60 mt-1 leading-relaxed line-clamp-2">
                  {sub.desc}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
