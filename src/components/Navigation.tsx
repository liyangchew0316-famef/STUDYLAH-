import React from 'react';
import { BookOpen, GraduationCap, ChevronLeft, Database } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentLevel: string | null;
  onBack: () => void;
  title?: string;
  onOpenCloudLibrary?: () => void;
}

export function Navigation({ currentLevel, onBack, title, onOpenCloudLibrary }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#02000D]/85 backdrop-blur-xl border-b border-[#D9AA90]/20 px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {currentLevel && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="p-2 hover:bg-[#07203F] rounded-full text-[#D9AA90] hover:text-[#EBDED4] transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>
        )}
        <div className="flex items-center gap-2">
          <GraduationCap className="text-[#A65E46]" size={28} />
          <h1 className="font-display font-bold text-xl tracking-tight uppercase text-[#EBDED4]">
            STUDY<span className="text-[#A65E46]">LAH</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {onOpenCloudLibrary && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCloudLibrary}
            className="flex items-center gap-2 bg-[#07203F]/60 hover:bg-[#07203F] px-3 py-1.5 rounded-full border border-[#D9AA90]/20 hover:border-[#D9AA90]/50 text-xs text-[#EBDED4]/80 hover:text-[#EBDED4] transition-all"
            title="Open Firebase Cloud Saved Materials"
          >
            <Database size={13} className="text-[#D9AA90]" />
            <span className="hidden sm:inline font-medium">Cloud Saved</span>
          </motion.button>
        )}

        {currentLevel && (
          <div className="hidden md:flex items-center gap-2 bg-[#07203F] px-3 py-1 rounded-full border border-[#D9AA90]/30">
            <BookOpen size={14} className="text-[#D9AA90]" />
            <span className="text-xs font-semibold text-[#D9AA90] tracking-wide uppercase">
              {currentLevel}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 text-[#EBDED4]/70">
          <span className="text-sm font-medium">{title || 'Dashboard'}</span>
        </div>
      </div>
    </nav>
  );
}

