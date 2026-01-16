import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, orderBy, limit, Timestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyY5Mm7yp7RCED2-9HzEbLAT5LWsqDsRM",
    authDomain: "invisible-toolkit-app.firebaseapp.com",
    projectId: "invisible-toolkit-app",
    storageBucket: "invisible-toolkit-app.firebasestorage.app",
    messagingSenderId: "317460814500",
    appId: "1:317460814500:web:44f34a0cfcfa333c35a431"
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// Auth functions
export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Create or update user document
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            lastLogin: Timestamp.now(),
            isPremium: false, // Will be updated by Stripe webhook
        }, { merge: true });

        return user;
    } catch (error) {
        console.error('Google sign-in error:', error);
        throw error;
    }
}

export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Sign out error:', error);
        throw error;
    }
}

export function onAuthChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}

// User data functions
export interface UserData {
    email: string;
    displayName: string;
    photoURL: string;
    isPremium: boolean;
    premiumUntil?: Date;
    bookmarks?: string[];
    notes?: Array<{ id: string; content: string; createdAt: Date }>;
}

export async function getUserData(uid: string): Promise<UserData | null> {
    try {
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data() as UserData;
        }
        return null;
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
}

export async function updateUserData(uid: string, data: Partial<UserData>) {
    try {
        const docRef = doc(db, 'users', uid);
        await updateDoc(docRef, data);
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
    }
}

// Bookmark functions
export async function addBookmark(uid: string, techniqueId: string) {
    const userData = await getUserData(uid);
    const bookmarks = userData?.bookmarks || [];
    if (!bookmarks.includes(techniqueId)) {
        bookmarks.push(techniqueId);
        await updateUserData(uid, { bookmarks });
    }
}

export async function removeBookmark(uid: string, techniqueId: string) {
    const userData = await getUserData(uid);
    const bookmarks = userData?.bookmarks || [];
    const filtered = bookmarks.filter(b => b !== techniqueId);
    await updateUserData(uid, { bookmarks: filtered });
}

// Premium check
export async function checkPremiumStatus(uid: string): Promise<boolean> {
    const userData = await getUserData(uid);
    if (!userData) return false;

    if (userData.isPremium && userData.premiumUntil) {
        return new Date() < userData.premiumUntil;
    }

    return userData.isPremium === true;
}

export { auth, db };
