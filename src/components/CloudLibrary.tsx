import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Database,
  Cloud,
  Network,
  BrainCircuit,
  FileText,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  RefreshCw,
  X,
  CheckCircle2,
  FolderTree
} from 'lucide-react';
import {
  getRecentSavedMindMaps,
  getRecentSavedQuizzes,
  getRecentSavedFlashcards,
  getRecentSavedTextbooks,
  seedAllPreGeneratedDataToFirebase,
  getFirebaseCacheSummary,
  SavedMindMapRecord,
  SavedQuizRecord,
  SavedFlashcardsRecord,
  SavedTextbookRecord
} from '../services/firebaseStudyService';
import { MindMapNode, QuizQuestion, Flashcard } from '../services/gemini';

interface CloudLibraryProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadMindMap: (data: MindMapNode, topic: string, level: string, subject: string, unit: string) => void;
  onLoadQuiz: (questions: QuizQuestion[], topic: string, level: string, subject: string, unit: string) => void;
  onLoadFlashcards: (cards: Flashcard[], topic: string, level: string, subject: string, unit: string) => void;
  onLoadTextbook: (content: string, unit: string, level: string, subject: string) => void;
}

type TabType = 'all' | 'mindmaps' | 'quizzes' | 'flashcards' | 'textbooks';

export function CloudLibrary({
  isOpen,
  onClose,
  onLoadMindMap,
  onLoadQuiz,
  onLoadFlashcards,
  onLoadTextbook
}: CloudLibraryProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [loading, setLoading] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedSuccessMsg, setSeedSuccessMsg] = useState<string | null>(null);
  const [cacheSummary, setCacheSummary] = useState({
    unitsCount: 0,
    mindmapsCount: 0,
    quizzesCount: 0,
    flashcardsCount: 0,
    textbooksCount: 0
  });

  const [mindmaps, setMindmaps] = useState<SavedMindMapRecord[]>([]);
  const [quizzes, setQuizzes] = useState<SavedQuizRecord[]>([]);
  const [flashcards, setFlashcards] = useState<SavedFlashcardsRecord[]>([]);
  const [textbooks, setTextbooks] = useState<SavedTextbookRecord[]>([]);

  const fetchCloudData = async () => {
    setLoading(true);
    try {
      const [mm, qz, fc, tb, summary] = await Promise.all([
        getRecentSavedMindMaps(30),
        getRecentSavedQuizzes(30),
        getRecentSavedFlashcards(30),
        getRecentSavedTextbooks(30),
        getFirebaseCacheSummary()
      ]);
      setMindmaps(mm);
      setQuizzes(qz);
      setFlashcards(fc);
      setTextbooks(tb);
      setCacheSummary(summary);
    } catch (err) {
      console.error('Error fetching cloud study data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSeedFirebase = async () => {
    setIsSeeding(true);
    setSeedSuccessMsg(null);
    try {
      const result = await seedAllPreGeneratedDataToFirebase(true);
      await fetchCloudData();
      setSeedSuccessMsg(`Successfully pre-cached ${result.unitsCount} syllabus packs and ${result.materialsCount} study suites into Firebase!`);
      setTimeout(() => setSeedSuccessMsg(null), 6000);
    } catch (err) {
      console.error('Failed to seed Firebase:', err);
    } finally {
      setIsSeeding(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCloudData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalItems = mindmaps.length + quizzes.length + flashcards.length + textbooks.length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#02000D]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-4xl max-h-[85vh] bg-[#02000D] border border-[#D9AA90]/25 rounded-3xl flex flex-col overflow-hidden shadow-2xl shadow-[#A65E46]/10 text-[#EBDED4]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#D9AA90]/15 flex items-center justify-between bg-[#07203F]/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#A65E46]/20 border border-[#D9AA90]/30 flex items-center justify-center text-[#D9AA90]">
                <Database size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold font-display text-[#EBDED4]">Firebase Cloud Storage</h2>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#A65E46]/20 text-[#D9AA90] border border-[#D9AA90]/30 flex items-center gap-1">
                    <Cloud size={10} /> Live Backend
                  </span>
                </div>
                <p className="text-xs text-[#EBDED4]/50">
                  Pre-generate & store units, mindmaps, quizzes and textbooks in Firebase to eliminate constant AI calls
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchCloudData}
                disabled={loading || isSeeding}
                className="p-2 rounded-xl bg-[#07203F] hover:bg-[#07203F]/80 text-[#EBDED4]/70 hover:text-[#EBDED4] transition-all disabled:opacity-50"
                title="Refresh from Firebase"
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#07203F] hover:bg-[#07203F]/80 text-[#EBDED4]/70 hover:text-[#EBDED4] transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Pre-generation Action Banner */}
          <div className="px-6 py-3.5 bg-[#07203F]/50 border-b border-[#D9AA90]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#EBDED4]/80">
              <Sparkles size={14} className="text-[#D9AA90] flex-shrink-0" />
              <span>
                <strong>Database Pre-Cache:</strong> {cacheSummary.unitsCount} Units • {cacheSummary.mindmapsCount} Mindmaps • {cacheSummary.textbooksCount} Textbooks • {cacheSummary.quizzesCount} Quizzes • {cacheSummary.flashcardsCount} Flashcards
              </span>
            </div>

            <button
              onClick={handleSeedFirebase}
              disabled={isSeeding}
              className="px-4 py-1.5 rounded-xl bg-[#A65E46] hover:bg-[#A65E46]/90 disabled:opacity-60 text-xs font-bold text-[#EBDED4] flex items-center justify-center gap-1.5 shadow-sm transition-all whitespace-nowrap"
            >
              <Cloud size={13} className={isSeeding ? "animate-bounce" : ""} />
              <span>{isSeeding ? 'Syncing to Firebase...' : 'Pre-generate & Sync All to Firebase'}</span>
            </button>
          </div>

          {seedSuccessMsg && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="px-6 py-2.5 bg-[#07203F] border-b border-[#D9AA90]/30 text-xs text-[#D9AA90] flex items-center gap-2 font-medium"
            >
              <CheckCircle2 size={14} className="text-[#D9AA90]" />
              <span>{seedSuccessMsg}</span>
            </motion.div>
          )}

          {/* Filter Tabs */}
          <div className="px-6 py-3 border-b border-[#D9AA90]/15 bg-[#02000D]/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-[#A65E46] text-[#EBDED4] font-bold shadow-sm'
                  : 'bg-[#07203F]/60 text-[#EBDED4]/60 hover:bg-[#07203F] hover:text-[#EBDED4]'
              }`}
            >
              All Materials ({totalItems})
            </button>
            <button
              onClick={() => setActiveTab('mindmaps')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                activeTab === 'mindmaps'
                  ? 'bg-[#A65E46] text-[#EBDED4] font-bold shadow-sm'
                  : 'bg-[#07203F]/60 text-[#EBDED4]/60 hover:bg-[#07203F] hover:text-[#EBDED4]'
              }`}
            >
              <Network size={14} /> Mindmaps ({mindmaps.length})
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                activeTab === 'quizzes'
                  ? 'bg-[#A65E46] text-[#EBDED4] font-bold shadow-sm'
                  : 'bg-[#07203F]/60 text-[#EBDED4]/60 hover:bg-[#07203F] hover:text-[#EBDED4]'
              }`}
            >
              <BrainCircuit size={14} /> Quizzes ({quizzes.length})
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-[#A65E46] text-[#EBDED4] font-bold shadow-sm'
                  : 'bg-[#07203F]/60 text-[#EBDED4]/60 hover:bg-[#07203F] hover:text-[#EBDED4]'
              }`}
            >
              <FileText size={14} /> Flashcards ({flashcards.length})
            </button>
            <button
              onClick={() => setActiveTab('textbooks')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                activeTab === 'textbooks'
                  ? 'bg-[#A65E46] text-[#EBDED4] font-bold shadow-sm'
                  : 'bg-[#07203F]/60 text-[#EBDED4]/60 hover:bg-[#07203F] hover:text-[#EBDED4]'
              }`}
            >
              <BookOpen size={14} /> Textbooks ({textbooks.length})
            </button>
          </div>

          {/* Content List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {loading ? (
              <div className="py-20 text-center space-y-3">
                <RefreshCw size={28} className="animate-spin text-[#A65E46] mx-auto" />
                <p className="text-sm text-[#EBDED4]/50">Loading items from Firebase Firestore backend...</p>
              </div>
            ) : totalItems === 0 ? (
              <div className="py-20 text-center space-y-4 border border-dashed border-[#D9AA90]/20 rounded-3xl p-8 bg-[#07203F]/30">
                <div className="w-16 h-16 rounded-full bg-[#A65E46]/10 flex items-center justify-center text-[#D9AA90] mx-auto">
                  <Cloud size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#EBDED4]">No materials in Firebase yet</h3>
                  <p className="text-xs text-[#EBDED4]/50 max-w-sm mx-auto">
                    Click "Pre-generate & Sync All to Firebase" above to instantly populate units, textbooks, mindmaps, and quizzes without consuming AI quota!
                  </p>
                </div>
                <button
                  onClick={handleSeedFirebase}
                  disabled={isSeeding}
                  className="px-6 py-2.5 rounded-xl bg-[#A65E46] hover:bg-[#A65E46]/90 text-[#EBDED4] text-xs font-bold transition-all shadow-md"
                >
                  {isSeeding ? 'Syncing...' : 'Pre-generate & Seed Now'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mindmaps */}
                {(activeTab === 'all' || activeTab === 'mindmaps') &&
                  mindmaps.map((item) => (
                    <div
                      key={`mm-${item.id}`}
                      className="p-5 rounded-2xl bg-[#07203F]/50 border border-[#D9AA90]/15 hover:border-[#D9AA90]/40 transition-all flex flex-col justify-between group hover:bg-[#07203F]/80"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9AA90] flex items-center gap-1.5">
                            <Network size={12} /> Mindmap
                          </span>
                          <span className="text-[10px] font-mono text-[#D9AA90] bg-[#02000D]/50 px-2 py-0.5 rounded-md border border-[#D9AA90]/20">
                            Firebase Cached
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#EBDED4] group-hover:text-[#D9AA90] transition-colors line-clamp-1">
                            {item.topic}
                          </h4>
                          <p className="text-xs text-[#EBDED4]/50 line-clamp-1 mt-0.5">
                            {item.level} • {item.subject} • {item.unit}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#D9AA90]/10 flex items-center justify-between">
                        <span className="text-[10px] text-[#EBDED4]/30 font-mono">
                          0 AI Tokens
                        </span>
                        <button
                          onClick={() => {
                            onLoadMindMap(item.data, item.topic, item.level, item.subject, item.unit);
                            onClose();
                          }}
                          className="text-xs font-bold text-[#D9AA90] hover:text-[#EBDED4] hover:underline flex items-center gap-1 transition-colors"
                        >
                          Open Mindmap →
                        </button>
                      </div>
                    </div>
                  ))}

                {/* Quizzes */}
                {(activeTab === 'all' || activeTab === 'quizzes') &&
                  quizzes.map((item) => (
                    <div
                      key={`qz-${item.id}`}
                      className="p-5 rounded-2xl bg-[#07203F]/50 border border-[#D9AA90]/15 hover:border-[#D9AA90]/40 transition-all flex flex-col justify-between group hover:bg-[#07203F]/80"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9AA90] flex items-center gap-1.5">
                            <BrainCircuit size={12} /> Quiz ({item.questions?.length || 0} Questions)
                          </span>
                          <span className="text-[10px] font-mono text-[#D9AA90] bg-[#02000D]/50 px-2 py-0.5 rounded-md border border-[#D9AA90]/20">
                            Firebase Cached
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#EBDED4] group-hover:text-[#D9AA90] transition-colors line-clamp-1">
                            {item.topic}
                          </h4>
                          <p className="text-xs text-[#EBDED4]/50 line-clamp-1 mt-0.5">
                            {item.level} • {item.subject} • {item.unit}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#D9AA90]/10 flex items-center justify-between">
                        <span className="text-[10px] text-[#EBDED4]/30 font-mono">
                          0 AI Tokens
                        </span>
                        <button
                          onClick={() => {
                            onLoadQuiz(item.questions, item.topic, item.level, item.subject, item.unit);
                            onClose();
                          }}
                          className="text-xs font-bold text-[#D9AA90] hover:text-[#EBDED4] hover:underline flex items-center gap-1 transition-colors"
                        >
                          Start Quiz →
                        </button>
                      </div>
                    </div>
                  ))}

                {/* Flashcards */}
                {(activeTab === 'all' || activeTab === 'flashcards') &&
                  flashcards.map((item) => (
                    <div
                      key={`fc-${item.id}`}
                      className="p-5 rounded-2xl bg-[#07203F]/50 border border-[#D9AA90]/15 hover:border-[#D9AA90]/40 transition-all flex flex-col justify-between group hover:bg-[#07203F]/80"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9AA90] flex items-center gap-1.5">
                            <FileText size={12} /> Flashcards ({item.cards?.length || 0} Cards)
                          </span>
                          <span className="text-[10px] font-mono text-[#D9AA90] bg-[#02000D]/50 px-2 py-0.5 rounded-md border border-[#D9AA90]/20">
                            Firebase Cached
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#EBDED4] group-hover:text-[#D9AA90] transition-colors line-clamp-1">
                            {item.topic}
                          </h4>
                          <p className="text-xs text-[#EBDED4]/50 line-clamp-1 mt-0.5">
                            {item.level} • {item.subject} • {item.unit}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#D9AA90]/10 flex items-center justify-between">
                        <span className="text-[10px] text-[#EBDED4]/30 font-mono">
                          0 AI Tokens
                        </span>
                        <button
                          onClick={() => {
                            onLoadFlashcards(item.cards, item.topic, item.level, item.subject, item.unit);
                            onClose();
                          }}
                          className="text-xs font-bold text-[#D9AA90] hover:text-[#EBDED4] hover:underline flex items-center gap-1 transition-colors"
                        >
                          Study Cards →
                        </button>
                      </div>
                    </div>
                  ))}

                {/* Textbooks */}
                {(activeTab === 'all' || activeTab === 'textbooks') &&
                  textbooks.map((item) => (
                    <div
                      key={`tb-${item.id}`}
                      className="p-5 rounded-2xl bg-[#07203F]/50 border border-[#D9AA90]/15 hover:border-[#D9AA90]/40 transition-all flex flex-col justify-between group hover:bg-[#07203F]/80"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9AA90] flex items-center gap-1.5">
                            <BookOpen size={12} /> Simple Textbook
                          </span>
                          <span className="text-[10px] font-mono text-[#D9AA90] bg-[#02000D]/50 px-2 py-0.5 rounded-md border border-[#D9AA90]/20">
                            Firebase Cached
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#EBDED4] group-hover:text-[#D9AA90] transition-colors line-clamp-1">
                            {item.unit}
                          </h4>
                          <p className="text-xs text-[#EBDED4]/50 line-clamp-1 mt-0.5">
                            {item.level} • {item.subject}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#D9AA90]/10 flex items-center justify-between">
                        <span className="text-[10px] text-[#EBDED4]/30 font-mono">
                          0 AI Tokens
                        </span>
                        <button
                          onClick={() => {
                            onLoadTextbook(item.content, item.unit, item.level, item.subject);
                            onClose();
                          }}
                          className="text-xs font-bold text-[#D9AA90] hover:text-[#EBDED4] hover:underline flex items-center gap-1 transition-colors"
                        >
                          Read Textbook →
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[#07203F]/80 border-t border-[#D9AA90]/15 flex items-center justify-between text-xs text-[#EBDED4]/50">
            <span className="flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#D9AA90]" />
              Connected to Firestore Database: <code className="text-[#D9AA90] font-mono text-[11px]">ai-studio-studylah</code>
            </span>
            <span>Cloud Persistence Active</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
