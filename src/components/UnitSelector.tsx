import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ListOrdered, Loader2, Sparkles, Database, Cloud, RefreshCw, Search } from 'lucide-react';
import { getUnits } from '../services/gemini';
import { getCachedUnits, saveUnitsToFirebase } from '../services/firebaseStudyService';

interface UnitSelectorProps {
  level: string;
  subject: string;
  language: string;
  onSelect: (unit: string) => void;
}

export function UnitSelector({ level, subject, language, onSelect }: UnitSelectorProps) {
  const [units, setUnits] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFromCache, setIsFromCache] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  async function loadUnits(forceAI: boolean = false) {
    if (forceAI) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      // 1. If not forcing AI, check Firebase Firestore cache first
      if (!forceAI) {
        const cached = await getCachedUnits(level, subject);
        if (cached && cached.length > 0) {
          setUnits(cached);
          setIsFromCache(true);
          setLoading(false);
          return;
        }
      }

      // 2. Fetch from syllabus / AI
      const data = await getUnits(level, subject, language);
      setUnits(data);
      setIsFromCache(false);

      // 3. Save into Firebase Firestore for future visits
      if (data && data.length > 0) {
        saveUnitsToFirebase(level, subject, language, data).catch(console.warn);
      }
    } catch (err) {
      console.error('Failed to load units:', err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }

  useEffect(() => {
    loadUnits(false);
  }, [level, subject, language]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold text-[#EBDED4]">Select <span className="text-[#A65E46] italic">Unit</span></h2>
        <p className="text-[#EBDED4]/60">Choose a specific chapter from the {subject} syllabus.</p>

        {/* Cache status pill */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {isFromCache ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07203F] border border-[#D9AA90]/40 text-[#D9AA90] text-xs font-medium shadow-sm">
              <Cloud size={13} className="text-[#A65E46]" />
              <span>Loaded from Firebase Cloud Cache (0 AI quota used)</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07203F]/60 border border-[#D9AA90]/20 text-[#EBDED4]/70 text-xs font-medium">
              <Sparkles size={13} className="text-[#D9AA90]" />
              <span>Curriculum Syllabus</span>
            </div>
          )}

          <button
            onClick={() => loadUnits(true)}
            disabled={isRefreshing}
            title="Refresh chapters with AI"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#02000D] border border-[#D9AA90]/20 text-[#EBDED4]/60 hover:text-[#EBDED4] hover:border-[#D9AA90]/50 text-xs transition-colors disabled:opacity-50"
          >
            <RefreshCw size={11} className={isRefreshing ? "animate-spin text-[#D9AA90]" : ""} />
            <span>{isRefreshing ? 'Refreshing...' : 'Re-fetch'}</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin text-[#A65E46]" size={40} />
          <p className="text-[#D9AA90] font-bold tracking-widest animate-pulse">
            CHECKING CURRICULUM SYLLABUS...
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Chapter Search & Total Count Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D9AA90]">
              <span className="px-2.5 py-1 rounded-lg bg-[#A65E46]/20 border border-[#D9AA90]/30">
                {units.length} Chapters Available
              </span>
              <span className="text-[#EBDED4]/50">KSSM Official Form 1 Syllabus</span>
            </div>

            {units.length > 5 && (
              <div className="relative w-full sm:w-64">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D9AA90]/60" />
                <input
                  type="text"
                  placeholder={`Search ${subject} chapters...`}
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#07203F]/60 border border-[#D9AA90]/20 text-[#EBDED4] text-xs placeholder-[#EBDED4]/40 focus:outline-none focus:border-[#D9AA90]/60"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => onSelect('General / All Units')}
              className="group glass-card p-5 rounded-2xl text-left border border-[#D9AA90]/40 bg-[#07203F]/70 hover:border-[#D9AA90] flex items-center justify-between col-span-full mb-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#D9AA90]" size={22} />
                <div>
                  <span className="font-bold text-base text-[#EBDED4] block">General Study (All Chapters Overview)</span>
                  <span className="text-xs text-[#EBDED4]/60">Comprehensive review across the complete Form 1 syllabus</span>
                </div>
              </div>
              {isFromCache && (
                <span className="text-[11px] text-[#D9AA90] font-mono border border-[#D9AA90]/30 px-2 py-0.5 rounded-md bg-[#02000D]/60 shrink-0">
                  Cloud Synced
                </span>
              )}
            </motion.button>
            
            {units
              .filter(u => !searchFilter.trim() || u.toLowerCase().includes(searchFilter.toLowerCase()))
              .map((unit, idx) => (
                <motion.button
                  key={unit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ x: 5, borderColor: 'rgba(217, 170, 144, 0.5)' }}
                  onClick={() => onSelect(unit)}
                  className="group glass-card p-5 rounded-2xl text-left border border-[#D9AA90]/15 hover:bg-[#07203F]/80 transition-all flex items-start gap-4 bg-[#07203F]/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#A65E46]/20 flex items-center justify-center text-[#D9AA90] group-hover:bg-[#A65E46] group-hover:text-[#EBDED4] transition-colors flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <span className="font-medium text-sm leading-relaxed text-[#EBDED4] flex-1">{unit}</span>
                </motion.button>
              ))}

            {searchFilter.trim() && units.filter(u => u.toLowerCase().includes(searchFilter.toLowerCase())).length === 0 && (
              <div className="col-span-full py-10 text-center text-sm text-[#EBDED4]/60">
                No chapters matching "{searchFilter}". Try another keyword or clear the search.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
