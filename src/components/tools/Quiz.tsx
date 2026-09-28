import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizQuestion } from '../../services/gemini';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';

interface QuizViewProps {
  questions: QuizQuestion[];
  onReset: () => void;
}

export function QuizView({ questions, onReset }: QuizViewProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="text-center py-12 glass-card p-8 rounded-3xl border border-[#D9AA90]/20 bg-[#07203F]/50 max-w-md mx-auto space-y-4">
        <p className="text-[#EBDED4]/70">No questions available for this unit yet.</p>
        <button
          onClick={onReset}
          className="px-6 py-2.5 rounded-xl bg-[#A65E46] text-[#EBDED4] font-bold text-sm hover:bg-[#A65E46]/90 transition-all shadow-md shadow-[#A65E46]/20 inline-flex items-center gap-2"
        >
          <RotateCcw size={16} /> Try Again
        </button>
      </div>
    );
  }

  const safeIdx = Math.min(Math.max(0, currentIdx), questions.length - 1);
  const currentQuestion = questions[safeIdx] || questions[0];
  const options = Array.isArray(currentQuestion?.options) ? currentQuestion.options : [];

  const handleOptionSelect = (option: string) => {
    if (selectedOption || !currentQuestion) return;
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (safeIdx < questions.length - 1) {
      setCurrentIdx(safeIdx + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const percentage = Math.round((score / Math.max(1, questions.length)) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-8 glass-card p-12 rounded-[2.5rem] relative overflow-hidden bg-[#07203F]/60 border border-[#D9AA90]/25"
      >
        <div className="absolute inset-0 bg-[#A65E46]/5 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <h3 className="text-5xl font-display font-bold text-[#D9AA90]">
            {percentage}%
          </h3>
          <p className="text-[#EBDED4]/40 uppercase tracking-[0.3em] font-bold text-xs">Performance Grade</p>
          <p className="text-[#EBDED4]/70 pt-4">You scored {score} out of {questions.length} questions correctly.</p>
        </div>
        
        <div className="pt-8 flex flex-col gap-4">
          <button
            onClick={onReset}
            className="flex items-center gap-2 mx-auto bg-[#A65E46] text-[#EBDED4] font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-all shadow-md shadow-[#A65E46]/20"
          >
            <RotateCcw size={18} />
            <span>TRY ANOTHER QUIZ</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center text-xs font-bold text-[#D9AA90] tracking-widest uppercase">
        <span>Question {safeIdx + 1} / {questions.length}</span>
        <span>Score: {score}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={safeIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold font-display leading-tight text-[#EBDED4]">
            {currentQuestion?.question || "Question"}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {options.map((option, i) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentQuestion?.correctAnswer;
              
              let variantClasses = "border-[#D9AA90]/20 bg-[#07203F]/50 text-[#EBDED4] hover:border-[#D9AA90]/60 hover:bg-[#07203F]/80";
              if (selectedOption) {
                if (isCorrect) variantClasses = "border-emerald-500 bg-emerald-500/15 text-emerald-300";
                else if (isSelected) variantClasses = "border-rose-500 bg-rose-500/15 text-rose-300";
                else variantClasses = "border-[#D9AA90]/10 bg-[#02000D]/40 text-[#EBDED4]/40";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption}
                  className={`p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${variantClasses}`}
                >
                  <span>{option}</span>
                  {selectedOption && isCorrect && <CheckCircle2 size={20} />}
                  {selectedOption && isSelected && !isCorrect && <XCircle size={20} />}
                </button>
              );
            })}
          </div>

          {selectedOption && currentQuestion?.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-[#07203F]/70 rounded-xl text-sm italic text-[#EBDED4]/70 border-l-2 border-[#A65E46]"
            >
              {currentQuestion.explanation}
            </motion.div>
          )}

          <div className="flex justify-end pt-4">
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="flex items-center gap-2 bg-[#A65E46] text-[#EBDED4] px-6 py-3 rounded-xl font-bold disabled:opacity-0 transition-all shadow-md shadow-[#A65E46]/20"
            >
              <span>{safeIdx === questions.length - 1 ? 'SEE RESULT' : 'NEXT QUESTION'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
