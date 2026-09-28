import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export const auth = getAuth(app);

let currentUserId: string | null = null;

// Initialize anonymous auth session
export const initAuth = (): Promise<User | null> => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        currentUserId = user.uid;
        resolve(user);
      } else {
        try {
          const userCredential = await signInAnonymously(auth);
          currentUserId = userCredential.user.uid;
          resolve(userCredential.user);
        } catch (error) {
          console.warn('Anonymous auth sign in error:', error);
          resolve(null);
        }
      }
    });
  });
};

export const getUserId = (): string => {
  return currentUserId || auth.currentUser?.uid || 'guest-student';
};
