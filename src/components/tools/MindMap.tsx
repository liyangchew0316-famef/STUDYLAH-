import React from 'react';
import { motion } from 'motion/react';
import { MindMapNode } from '../../services/gemini';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface MindMapViewProps {
  node: MindMapNode;
  level?: number;
  onRetry?: () => void;
}

export function MindMapView({ node, level = 0, onRetry }: MindMapViewProps) {
  if (node.id === 'error') {
    return (
      <div className="glass-card p-8 rounded-3xl border border-red-500/30 text-center max-w-md mx-auto space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto">
          <AlertCircle size={24} />
        </div>
        <h4 className="font-bold text-white text-lg">Unable to Build MindMap</h4>
        <p className="text-white/60 text-sm">{node.label || 'Please try another sub-topic or regenerate.'}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#A65E46] text-[#EBDED4] font-bold text-sm hover:bg-[#A65E46]/90 transition-all shadow-md shadow-[#A65E46]/20"
          >
            <RotateCcw size={16} /> Try Again
          </button>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={level === 0 ? "flex flex-col items-center" : "ml-6 mt-3"}
    >
      <div className={`
        px-5 py-2.5 rounded-xl border-2 transition-all duration-300 max-w-lg
        ${level === 0 
          ? 'bg-[#A65E46] text-[#EBDED4] border-[#D9AA90] font-bold text-lg shadow-lg shadow-[#A65E46]/20' 
          : level === 1
          ? 'bg-[#07203F] border-[#D9AA90]/40 text-[#D9AA90] font-semibold text-sm hover:border-[#D9AA90]'
          : 'bg-[#02000D] border-[#D9AA90]/15 text-[#EBDED4]/90 text-xs hover:border-[#D9AA90]/40'
        }
      `}>
        {node.label}
      </div>
      
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col gap-2 mt-3 border-l-2 border-[#D9AA90]/30 ml-4 pl-2">
          {node.children.map((child, i) => (
            <MindMapView key={child.id || i} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
