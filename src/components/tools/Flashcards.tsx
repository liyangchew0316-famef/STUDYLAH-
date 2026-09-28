import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flashcard } from '../../services/gemini';
import { SwitchCamera, ChevronLeft, ChevronRight } from 'lucide-react';

interface FlashcardViewProps {
  cards: Flashcard[];
}

export function FlashcardView({ cards }: FlashcardViewProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!Array.isArray(cards) || cards.length === 0) {
    return (
      <div className="text-center py-12 glass-card p-8 rounded-3xl border border-[#D9AA90]/20 bg-[#07203F]/50 max-w-md mx-auto">
        <p className="text-[#EBDED4]/70">No flashcards available for this unit yet.</p>
      </div>
    );
  }

  const safeIdx = Math.min(Math.max(0, currentIdx), cards.length - 1);
  const card = cards[safeIdx] || cards[0] || { front: 'No content', back: 'No content' };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((i) => (i + 1) % cards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((i) => (i - 1 + cards.length) % cards.length);
    }, 150);
  };

  return (
    <div className="max-w-xl mx-auto space-y-12">
      <div className="flex justify-between items-center text-xs font-bold text-[#D9AA90] tracking-widest uppercase">
        <span>Card {safeIdx + 1} / {cards.length}</span>
        <span>Click to flip</span>
      </div>

      <div 
        className="relative h-80 perspective-1000 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-full h-full relative preserve-3d"
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden glass-card p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center border-2 border-[#D9AA90]/25 group-hover:border-[#D9AA90]/50 transition-colors bg-[#07203F]/70 text-[#EBDED4]">
            <h3 className="text-3xl font-display font-bold leading-tight">{card.front}</h3>
            <div className="mt-8 text-[#D9AA90]/70 flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
              <SwitchCamera size={16} /> FLIP TO REVEAL
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden glass-card p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center border-2 border-[#D9AA90]/40 [transform:rotateY(180deg)] bg-[#07203F]/95 text-[#EBDED4]">
            <p className="text-xl text-[#EBDED4] leading-relaxed font-medium">{card.back}</p>
            <div className="mt-8 text-[#D9AA90]/70 flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
              <SwitchCamera size={16} /> FLIP TO QUESTION
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="p-4 rounded-full bg-[#07203F] hover:bg-[#07203F]/80 transition-colors border border-[#D9AA90]/20 text-[#EBDED4]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="p-4 rounded-full bg-[#A65E46] text-[#EBDED4] hover:bg-[#A65E46]/90 transition-colors shadow-md shadow-[#A65E46]/20"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
