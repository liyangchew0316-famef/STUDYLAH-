import React from 'react';
import { motion } from 'motion/react';
import { Network, FileText, BrainCircuit, MessageSquare, Plus, BookOpen, Database, Cloud } from 'lucide-react';

const TOOLS = [
  {
    id: 'mindmap',
    name: 'Mindmap',
    desc: 'Visualize complex topics into structured graphs (Saved to Firebase).',
    icon: Network,
    color: 'amber',
  },
  {
    id: 'quiz',
    name: 'Quiz',
    desc: 'Practice with AI-generated MCQs from your syllabus (Saved to Firebase).',
    icon: BrainCircuit,
    color: 'amber',
  },
  {
    id: 'flashcards',
    name: 'Flashcards',
    desc: 'Bite-sized memory boosters for active recall (Saved to Firebase).',
    icon: FileText,
    color: 'amber',
  },
  {
    id: 'textbook',
    name: 'Simple Textbook',
    desc: 'Simplified summaries and key points from your syllabus (Saved to Firebase).',
    icon: BookOpen,
    color: 'emerald',
  },
  {
    id: 'tutor',
    name: 'AI Tutor Chat',
    desc: 'Ask questions about specific units following your textbook.',
    icon: MessageSquare,
    color: 'amber',
  },
];

interface DashboardProps {
  level: string;
  subject: string;
  unit: string | null;
  onSelectTool: (toolId: string) => void;
  onChangeUnit: () => void;
  onOpenCloudLibrary?: () => void;
}

export function Dashboard({ level, subject, unit, onSelectTool, onChangeUnit, onOpenCloudLibrary }: DashboardProps) {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#D9AA90] font-bold tracking-widest text-[10px] uppercase"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#A65E46] animate-pulse" />
            {level} • {subject}
          </motion.div>
          <h2 className="text-4xl font-display font-bold text-[#EBDED4]">Study <span className="text-[#A65E46] italic">Arsenal</span></h2>
          <button 
            onClick={onChangeUnit}
            className="group flex items-center gap-3 text-[#EBDED4]/50 hover:text-[#EBDED4] transition-colors"
          >
            <span className="font-medium">Unit: {unit || 'Not selected'}</span>
            <Plus size={16} className="text-[#D9AA90] group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {onOpenCloudLibrary && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenCloudLibrary}
            className="glass-card px-6 py-4 rounded-3xl border border-[#D9AA90]/25 flex items-center gap-4 hover:border-[#D9AA90]/50 transition-all bg-[#07203F]/60"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#A65E46]/20 flex items-center justify-center text-[#D9AA90]">
              <Database size={20} />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-[#D9AA90] uppercase tracking-widest font-bold leading-none mb-1 flex items-center gap-1">
                <Cloud size={10} /> Firebase Backend
              </div>
              <div className="font-bold text-sm text-[#EBDED4]">View Cloud Saved Materials</div>
            </div>
          </motion.button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOLS.map((tool, idx) => (
          <motion.button
            key={tool.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            onClick={() => onSelectTool(tool.id)}
            className="group glass-card p-8 rounded-3xl flex items-start gap-6 text-left hover:border-[#D9AA90]/50 transition-all hover:bg-[#07203F]/80"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#A65E46]/15 flex-shrink-0 flex items-center justify-center text-[#D9AA90] group-hover:bg-[#A65E46] group-hover:text-[#EBDED4] transition-all">
              <tool.icon size={32} />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-2xl font-bold font-display text-[#EBDED4]">{tool.name}</h3>
              <p className="text-[#EBDED4]/60 leading-relaxed">{tool.desc}</p>
              <div className="pt-4 flex items-center text-xs font-bold text-[#D9AA90] opacity-0 group-hover:opacity-100 transition-opacity">
                LAUNCH TOOL <Plus size={14} className="ml-1" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

