import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore';
import { db, getUserId } from '../lib/firebase';
import { MindMapNode, QuizQuestion, Flashcard } from './gemini';
import { PREGENERATED_UNITS, PREGENERATED_STUDY_MATERIALS, findPregeneratedMaterial, findSyllabusPack } from '../data/preGeneratedSyllabus';

export interface SavedUnitRecord {
  id?: string;
  level: string;
  subject: string;
  language?: string;
  units: string[];
  createdAt?: any;
  userId?: string;
  isPreGenerated?: boolean;
}

export interface SavedMindMapRecord {
  id?: string;
  topic: string;
  level: string;
  subject: string;
  unit: string;
  language: string;
  data: MindMapNode;
  createdAt?: any;
  userId?: string;
  isCached?: boolean;
}

export interface SavedQuizRecord {
  id?: string;
  topic: string;
  level: string;
  subject: string;
  unit: string;
  language: string;
  questions: QuizQuestion[];
  createdAt?: any;
  userId?: string;
  isCached?: boolean;
}

export interface SavedFlashcardsRecord {
  id?: string;
  topic: string;
  level: string;
  subject: string;
  unit: string;
  language: string;
  cards: Flashcard[];
  createdAt?: any;
  userId?: string;
  isCached?: boolean;
}

export interface SavedTextbookRecord {
  id?: string;
  unit: string;
  level: string;
  subject: string;
  language: string;
  content: string;
  createdAt?: any;
  userId?: string;
  isCached?: boolean;
}

// Key sanitization for deterministic Firestore document IDs
export function normalizeKey(str: string): string {
  if (!str) return 'all';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').slice(0, 120);
}

export function getUnitDocId(level: string, subject: string): string {
  return `units_${normalizeKey(level)}_${normalizeKey(subject)}`;
}

export function getMaterialDocId(type: string, level: string, subject: string, unit: string): string {
  return `${type}_${normalizeKey(level)}_${normalizeKey(subject)}_${normalizeKey(unit)}`;
}

// ==========================================
// 1. Units Caching & Firestore Pre-generation
// ==========================================
export async function getCachedUnits(level: string, subject: string): Promise<string[] | null> {
  try {
    const docId = getUnitDocId(level, subject);
    const docRef = doc(db, 'units', docId);

    // Look for the authoritative pre-generated pack in code with flexible alias matching
    const foundPack = findSyllabusPack(level, subject);

    if (foundPack && foundPack.units.length > 0) {
      // Sync to Firestore in background to maintain cloud persistence
      saveUnitsToFirebase(level, subject, 'default', foundPack.units).catch(console.warn);
      console.log(`[Authoritative Pack Hit] Found ${foundPack.units.length} units for ${level} - ${subject}`);
      return foundPack.units;
    }

    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (Array.isArray(data.units) && data.units.length > 0) {
        console.log(`[Firebase Cache Hit] Units for ${level} - ${subject}`);
        return data.units;
      }
    }

    return null;
  } catch (error) {
    console.warn('Error fetching cached units from Firebase:', error);
    const foundPack = findSyllabusPack(level, subject);
    if (foundPack) return foundPack.units;
    return null;
  }
}

export async function saveUnitsToFirebase(
  level: string,
  subject: string,
  language: string,
  units: string[]
): Promise<void> {
  try {
    const docId = getUnitDocId(level, subject);
    const docRef = doc(db, 'units', docId);
    await setDoc(docRef, {
      level,
      subject,
      language,
      units,
      userId: getUserId(),
      isPreGenerated: true,
      createdAt: serverTimestamp()
    }, { merge: true });
    console.log(`[Firebase Saved] Units cached under doc ${docId}`);
  } catch (error) {
    console.warn('Failed to save units to Firebase:', error);
  }
}

// ==========================================
// 2. Mindmaps
// ==========================================
export async function getCachedMindMap(
  level: string,
  subject: string,
  unit: string
): Promise<MindMapNode | null> {
  try {
    const docId = getMaterialDocId('mindmap', level, subject, unit);
    const docRef = doc(db, 'mindmaps', docId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (data && data.data && data.data.label) {
        console.log(`[Firebase Cache Hit] Mindmap for ${unit}`);
        return data.data as MindMapNode;
      }
    }

    // Secondary fallback: check pre-generated or dynamic Form 1 study materials
    const pregen = findPregeneratedMaterial(level || 'Form 1', subject, unit);
    if (pregen && pregen.mindmap) {
      saveMindMapToFirebase(unit, level || 'Form 1', subject, unit, pregen.language, pregen.mindmap).catch(console.warn);
      return pregen.mindmap;
    }

    return null;
  } catch (error) {
    console.warn('Error fetching cached mindmap:', error);
    return null;
  }
}

export async function saveMindMapToFirebase(
  topic: string,
  level: string,
  subject: string,
  unit: string,
  language: string,
  data: MindMapNode
): Promise<string> {
  try {
    const docId = getMaterialDocId('mindmap', level, subject, unit || topic);
    const docRef = doc(db, 'mindmaps', docId);
    await setDoc(docRef, {
      topic,
      level,
      subject,
      unit,
      language,
      data,
      userId: getUserId(),
      isCached: true,
      createdAt: serverTimestamp()
    }, { merge: true });
    console.log('Saved MindMap to Firebase Firestore with deterministic ID:', docId);
    return docId;
  } catch (error) {
    console.error('Failed to save MindMap to Firebase:', error);
    return '';
  }
}

export async function getRecentSavedMindMaps(maxCount: number = 20): Promise<SavedMindMapRecord[]> {
  try {
    const q = query(
      collection(db, 'mindmaps'),
      orderBy('createdAt', 'desc'),
      limit(maxCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({
      id: d.id,
      ...(d.data() as Omit<SavedMindMapRecord, 'id'>)
    }));
  } catch (error) {
    console.warn('Ordered query failed for mindmaps, using fallback query:', error);
    try {
      const fallbackQ = query(collection(db, 'mindmaps'), limit(maxCount));
      const snapshot = await getDocs(fallbackQ);
      return snapshot.docs.map(d => ({
        id: d.id,
        ...(d.data() as Omit<SavedMindMapRecord, 'id'>)
      }));
    } catch (e) {
      console.error('Error fetching mindmaps from Firebase:', e);
      return [];
    }
  }
}

// ==========================================
// 3. Quizzes
// ==========================================
export async function getCachedQuiz(
  level: string,
  subject: string,
  unit: string
): Promise<QuizQuestion[] | null> {
  try {
    const docId = getMaterialDocId('quiz', level, subject, unit);
    const docRef = doc(db, 'quizzes', docId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (Array.isArray(data.questions) && data.questions.length > 0) {
        console.log(`[Firebase Cache Hit] Quiz for ${unit}`);
        return data.questions as QuizQuestion[];
      }
    }

    const pregen = findPregeneratedMaterial(level || 'Form 1', subject, unit);
    if (pregen && pregen.quiz && pregen.quiz.length > 0) {
      saveQuizToFirebase(unit, level || 'Form 1', subject, unit, pregen.language, pregen.quiz).catch(console.warn);
      return pregen.quiz;
    }

    return null;
  } catch (error) {
    console.warn('Error fetching cached quiz:', error);
    return null;
  }
}

export async function saveQuizToFirebase(
  topic: string,
  level: string,
  subject: string,
  unit: string,
  language: string,
  questions: QuizQuestion[]
): Promise<string> {
  try {
    const docId = getMaterialDocId('quiz', level, subject, unit || topic);
    const docRef = doc(db, 'quizzes', docId);
    await setDoc(docRef, {
      topic,
      level,
      subject,
      unit,
      language,
      questions,
      userId: getUserId(),
      isCached: true,
      createdAt: serverTimestamp()
    }, { merge: true });
    console.log('Saved Quiz to Firebase Firestore with deterministic ID:', docId);
    return docId;
  } catch (error) {
    console.error('Failed to save Quiz to Firebase:', error);
    return '';
  }
}

export async function getRecentSavedQuizzes(maxCount: number = 20): Promise<SavedQuizRecord[]> {
  try {
    const q = query(
      collection(db, 'quizzes'),
      orderBy('createdAt', 'desc'),
      limit(maxCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({
      id: d.id,
      ...(d.data() as Omit<SavedQuizRecord, 'id'>)
    }));
  } catch (error) {
    console.warn('Ordered query failed for quizzes, using fallback query:', error);
    try {
      const fallbackQ = query(collection(db, 'quizzes'), limit(maxCount));
      const snapshot = await getDocs(fallbackQ);
      return snapshot.docs.map(d => ({
        id: d.id,
        ...(d.data() as Omit<SavedQuizRecord, 'id'>)
      }));
    } catch (e) {
      console.error('Error fetching quizzes from Firebase:', e);
      return [];
    }
  }
}

// ==========================================
// 4. Flashcards
// ==========================================
export async function getCachedFlashcards(
  level: string,
  subject: string,
  unit: string
): Promise<Flashcard[] | null> {
  try {
    const docId = getMaterialDocId('flashcards', level, subject, unit);
    const docRef = doc(db, 'flashcards', docId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (Array.isArray(data.cards) && data.cards.length > 0) {
        console.log(`[Firebase Cache Hit] Flashcards for ${unit}`);
        return data.cards as Flashcard[];
      }
    }

    const pregen = findPregeneratedMaterial(level || 'Form 1', subject, unit);
    if (pregen && pregen.flashcards && pregen.flashcards.length > 0) {
      saveFlashcardsToFirebase(unit, level || 'Form 1', subject, unit, pregen.language, pregen.flashcards).catch(console.warn);
      return pregen.flashcards;
    }

    return null;
  } catch (error) {
    console.warn('Error fetching cached flashcards:', error);
    return null;
  }
}

export async function saveFlashcardsToFirebase(
  topic: string,
  level: string,
  subject: string,
  unit: string,
  language: string,
  cards: Flashcard[]
): Promise<string> {
  try {
    const docId = getMaterialDocId('flashcards', level, subject, unit || topic);
    const docRef = doc(db, 'flashcards', docId);
    await setDoc(docRef, {
      topic,
      level,
      subject,
      unit,
      language,
      cards,
      userId: getUserId(),
      isCached: true,
      createdAt: serverTimestamp()
    }, { merge: true });
    console.log('Saved Flashcards to Firebase Firestore with deterministic ID:', docId);
    return docId;
  } catch (error) {
    console.error('Failed to save Flashcards to Firebase:', error);
    return '';
  }
}

export async function getRecentSavedFlashcards(maxCount: number = 20): Promise<SavedFlashcardsRecord[]> {
  try {
    const q = query(
      collection(db, 'flashcards'),
      orderBy('createdAt', 'desc'),
      limit(maxCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({
      id: d.id,
      ...(d.data() as Omit<SavedFlashcardsRecord, 'id'>)
    }));
  } catch (error) {
    console.warn('Ordered query failed for flashcards, using fallback query:', error);
    try {
      const fallbackQ = query(collection(db, 'flashcards'), limit(maxCount));
      const snapshot = await getDocs(fallbackQ);
      return snapshot.docs.map(d => ({
        id: d.id,
        ...(d.data() as Omit<SavedFlashcardsRecord, 'id'>)
      }));
    } catch (e) {
      console.error('Error fetching flashcards from Firebase:', e);
      return [];
    }
  }
}

// ==========================================
// 5. Textbooks
// ==========================================
export async function getCachedTextbook(
  level: string,
  subject: string,
  unit: string
): Promise<string | null> {
  try {
    const docId = getMaterialDocId('textbook', level, subject, unit);
    const docRef = doc(db, 'textbooks', docId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (data && typeof data.content === 'string' && data.content.trim()) {
        console.log(`[Firebase Cache Hit] Textbook for ${unit}`);
        return data.content;
      }
    }

    const pregen = findPregeneratedMaterial(level || 'Form 1', subject, unit);
    if (pregen && pregen.textbook) {
      saveTextbookToFirebase(unit, level || 'Form 1', subject, pregen.language, pregen.textbook).catch(console.warn);
      return pregen.textbook;
    }

    return null;
  } catch (error) {
    console.warn('Error fetching cached textbook:', error);
    return null;
  }
}

export async function saveTextbookToFirebase(
  unit: string,
  level: string,
  subject: string,
  language: string,
  content: string
): Promise<string> {
  try {
    const docId = getMaterialDocId('textbook', level, subject, unit);
    const docRef = doc(db, 'textbooks', docId);
    await setDoc(docRef, {
      unit,
      level,
      subject,
      language,
      content,
      userId: getUserId(),
      isCached: true,
      createdAt: serverTimestamp()
    }, { merge: true });
    console.log('Saved Textbook to Firebase Firestore with deterministic ID:', docId);
    return docId;
  } catch (error) {
    console.error('Failed to save Textbook to Firebase:', error);
    return '';
  }
}

export async function getRecentSavedTextbooks(maxCount: number = 20): Promise<SavedTextbookRecord[]> {
  try {
    const q = query(
      collection(db, 'textbooks'),
      orderBy('createdAt', 'desc'),
      limit(maxCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({
      id: d.id,
      ...(d.data() as Omit<SavedTextbookRecord, 'id'>)
    }));
  } catch (error) {
    console.warn('Ordered query failed for textbooks, using fallback query:', error);
    try {
      const fallbackQ = query(collection(db, 'textbooks'), limit(maxCount));
      const snapshot = await getDocs(fallbackQ);
      return snapshot.docs.map(d => ({
        id: d.id,
        ...(d.data() as Omit<SavedTextbookRecord, 'id'>)
      }));
    } catch (e) {
      console.error('Error fetching textbooks from Firebase:', e);
      return [];
    }
  }
}

// ==========================================
// 6. Bulk Pre-Seeding & Database Synchronization
// ==========================================
export async function seedAllPreGeneratedDataToFirebase(force: boolean = false): Promise<{
  unitsCount: number;
  materialsCount: number;
}> {
  let unitsCount = 0;
  let materialsCount = 0;

  try {
    if (!force && typeof window !== 'undefined' && localStorage.getItem('studylah_pregenerated_seeded_v3') === 'true') {
      console.log('[Firebase Cache] Local marker indicates pre-generated syllabus is already seeded.');
      return { unitsCount: PREGENERATED_UNITS.length, materialsCount: PREGENERATED_STUDY_MATERIALS.length };
    }

    console.log('Starting bulk pre-seeding into Firebase Firestore...');

    // 1. Seed Units
    for (const pack of PREGENERATED_UNITS) {
      const docId = getUnitDocId(pack.level, pack.subject);
      const docRef = doc(db, 'units', docId);
      await setDoc(docRef, {
        level: pack.level,
        subject: pack.subject,
        units: pack.units,
        isPreGenerated: true,
        userId: getUserId(),
        createdAt: serverTimestamp()
      }, { merge: true });
      unitsCount++;
    }

    // 2. Seed Study Materials (Mindmaps, Textbooks, Quizzes, Flashcards)
    for (const mat of PREGENERATED_STUDY_MATERIALS) {
      // Mindmap
      const mmDocId = getMaterialDocId('mindmap', mat.level, mat.subject, mat.unit);
      await setDoc(doc(db, 'mindmaps', mmDocId), {
        topic: mat.unit,
        level: mat.level,
        subject: mat.subject,
        unit: mat.unit,
        language: mat.language,
        data: mat.mindmap,
        userId: getUserId(),
        isCached: true,
        createdAt: serverTimestamp()
      }, { merge: true });

      // Textbook
      const tbDocId = getMaterialDocId('textbook', mat.level, mat.subject, mat.unit);
      await setDoc(doc(db, 'textbooks', tbDocId), {
        unit: mat.unit,
        level: mat.level,
        subject: mat.subject,
        language: mat.language,
        content: mat.textbook,
        userId: getUserId(),
        isCached: true,
        createdAt: serverTimestamp()
      }, { merge: true });

      // Quiz
      const qzDocId = getMaterialDocId('quiz', mat.level, mat.subject, mat.unit);
      await setDoc(doc(db, 'quizzes', qzDocId), {
        topic: mat.unit,
        level: mat.level,
        subject: mat.subject,
        unit: mat.unit,
        language: mat.language,
        questions: mat.quiz,
        userId: getUserId(),
        isCached: true,
        createdAt: serverTimestamp()
      }, { merge: true });

      // Flashcards
      const fcDocId = getMaterialDocId('flashcards', mat.level, mat.subject, mat.unit);
      await setDoc(doc(db, 'flashcards', fcDocId), {
        topic: mat.unit,
        level: mat.level,
        subject: mat.subject,
        unit: mat.unit,
        language: mat.language,
        cards: mat.flashcards,
        userId: getUserId(),
        isCached: true,
        createdAt: serverTimestamp()
      }, { merge: true });

      materialsCount++;
    }

    console.log(`Pre-seeding complete: ${unitsCount} unit packs, ${materialsCount} rich study suites seeded.`);
    if (typeof window !== 'undefined') {
      localStorage.setItem('studylah_pregenerated_seeded_v3', 'true');
    }
    return { unitsCount, materialsCount };
  } catch (err) {
    console.error('Error during pre-seeding to Firebase:', err);
    return { unitsCount, materialsCount };
  }
}

export async function getFirebaseCacheSummary(): Promise<{
  unitsCount: number;
  mindmapsCount: number;
  quizzesCount: number;
  flashcardsCount: number;
  textbooksCount: number;
}> {
  try {
    const [unitsSnap, mmSnap, qzSnap, fcSnap, tbSnap] = await Promise.all([
      getDocs(collection(db, 'units')).catch(() => ({ size: 0 })),
      getDocs(collection(db, 'mindmaps')).catch(() => ({ size: 0 })),
      getDocs(collection(db, 'quizzes')).catch(() => ({ size: 0 })),
      getDocs(collection(db, 'flashcards')).catch(() => ({ size: 0 })),
      getDocs(collection(db, 'textbooks')).catch(() => ({ size: 0 }))
    ]);

    return {
      unitsCount: unitsSnap.size || 0,
      mindmapsCount: mmSnap.size || 0,
      quizzesCount: qzSnap.size || 0,
      flashcardsCount: fcSnap.size || 0,
      textbooksCount: tbSnap.size || 0
    };
  } catch (error) {
    console.warn('Error fetching cache summary:', error);
    return { unitsCount: 0, mindmapsCount: 0, quizzesCount: 0, flashcardsCount: 0, textbooksCount: 0 };
  }
}

