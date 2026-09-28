import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Beaker, 
  History, 
  Book, 
  Globe, 
  Cpu, 
  Wrench, 
  Heart, 
  Moon, 
  Search,
  Sparkles
} from 'lucide-react';

export interface Form1Subject {
  id: string;
  label: string;
  icon: any;
  desc: string;
  category: 'core' | 'stem' | 'humanities' | 'electives';
  babCount: string;
}

const FORM_1_SUBJECTS: Form1Subject[] = [
  // CORE / TERAS
  { id: 'math', label: 'Mathematics', icon: Calculator, desc: 'Matematik Tingkatan 1', category: 'core', babCount: '13 Bab' },
  { id: 'science', label: 'Science', icon: Beaker, desc: 'Sains Tingkatan 1', category: 'core', babCount: '9 Bab' },
  { id: 'bm', label: 'Bahasa Melayu', icon: Book, desc: 'Bahasa Melayu KSSM', category: 'core', babCount: '18 Tema + Komsas' },
  { id: 'en', label: 'English', icon: Book, desc: 'Bahasa Inggeris Form 1', category: 'core', babCount: 'Starter + 9 Units + Lit' },
  { id: 'history', label: 'History', icon: History, desc: 'Sejarah Tingkatan 1', category: 'core', babCount: '8 Bab' },
  { id: 'geography', label: 'Geography', icon: Globe, desc: 'Geografi Tingkatan 1', category: 'humanities', babCount: '13 Bab + Lapangan' },

  // STEM & TECHNOLOGY
  { id: 'ask', label: 'ASK', icon: Cpu, desc: 'Asas Sains Komputer', category: 'stem', babCount: '4 Bab (6 Bahagian)' },
  { id: 'rbt', label: 'RBT', icon: Wrench, desc: 'Reka Bentuk dan Teknologi', category: 'stem', babCount: '5 Bab (6 Unit)' },

  // MORAL & RELIGION & ELECTIVES
  { id: 'moral', label: 'Pendidikan Moral', icon: Heart, desc: 'Pendidikan Moral T1', category: 'electives', babCount: '17 Unit (4 Bidang)' },
  { id: 'islam', label: 'Pendidikan Islam', icon: Moon, desc: 'Pendidikan Islam T1', category: 'electives', babCount: '6 Bidang (30 Pelajaran)' },
  { id: 'chinese', label: 'Chinese', icon: Book, desc: 'Bahasa Cina / 华文 T1', category: 'electives', babCount: '10 单元 + 附录' }
];

interface SubjectSelectorProps {
  onSelect: (subject: string) => void;
  level?: string;
}

export function SubjectSelector({ onSelect, level }: SubjectSelectorProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const displayedSubjects = FORM_1_SUBJECTS.filter(s => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = s.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65E46]/15 border border-[#D9AA90]/30 text-[#D9AA90] text-xs font-bold tracking-widest uppercase">
          <Sparkles size={13} className="text-[#D9AA90]" />
          <span>Form 1 (Tingkatan 1) KSSM Syllabus</span>
        </div>
        <h2 className="text-4xl font-display font-bold text-[#EBDED4]">Select <span className="text-[#A65E46] italic">Subject</span></h2>
        <p className="text-[#EBDED4]/60 max-w-xl mx-auto">
          Choose a Form 1 subject to explore official chapters, simple textbooks, interactive mindmaps, and quizzes.
        </p>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Subjects (Semua)' },
            { id: 'core', label: 'Core (Teras)' },
            { id: 'stem', label: 'STEM & Tech (ASK / RBT)' },
            { id: 'humanities', label: 'Humanities (Geografi)' },
            { id: 'electives', label: 'Moral / Islam / Cina' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-[#A65E46] text-[#EBDED4] shadow-md shadow-[#A65E46]/20'
                  : 'bg-[#07203F]/60 text-[#EBDED4]/60 hover:text-[#EBDED4] hover:bg-[#07203F] border border-[#D9AA90]/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D9AA90]/60" />
          <input
            type="text"
            placeholder="Search Form 1 subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[#07203F]/60 border border-[#D9AA90]/20 text-[#EBDED4] text-xs placeholder-[#EBDED4]/40 focus:outline-none focus:border-[#D9AA90]/60"
          />
        </div>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayedSubjects.map((sub, idx) => (
          <motion.button
            key={sub.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.02 }}
            whileHover={{ y: -5, borderColor: 'rgba(217, 170, 144, 0.5)', backgroundColor: 'rgba(7, 32, 63, 0.85)' }}
            onClick={() => onSelect(sub.label)}
            className="group glass-card p-6 rounded-3xl flex flex-col items-center gap-3 text-center border border-[#D9AA90]/15 transition-all bg-[#07203F]/50 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#A65E46]/15 flex items-center justify-center text-[#D9AA90] group-hover:bg-[#A65E46] group-hover:text-[#EBDED4] transition-all">
              <sub.icon size={28} />
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-[#EBDED4]">{sub.label}</div>
              <div className="text-[#EBDED4]/50 text-xs mt-0.5">{sub.desc}</div>
              <div className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#02000D]/60 border border-[#D9AA90]/20 text-[10px] text-[#D9AA90] font-mono">
                {sub.babCount}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {displayedSubjects.length === 0 && (
        <div className="text-center py-12 text-[#EBDED4]/50">
          No Form 1 subjects found matching "{searchQuery}".
        </div>
      )}
    </div>
  );
}
