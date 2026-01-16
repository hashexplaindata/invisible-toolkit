'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { onAuthChange, getUserData, signInWithGoogle, logout, type UserData } from '@/lib/firebase';

interface AuthContextType {
    user: User | null;
    userData: UserData | null;
    loading: boolean;
    isPremium: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
    refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshUserData = async () => {
        if (user) {
            const data = await getUserData(user.uid);
            setUserData(data);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthChange(async (firebaseUser) => {
            setUser(firebaseUser);

            if (firebaseUser) {
                const data = await getUserData(firebaseUser.uid);
                setUserData(data);
            } else {
                setUserData(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error('Sign in failed:', error);
            throw error;
        }
    };

    const handleSignOut = async () => {
        try {
            await logout();
            setUser(null);
            setUserData(null);
        } catch (error) {
            console.error('Sign out failed:', error);
            throw error;
        }
    };

    const isPremium = userData?.isPremium === true;

    return (
        <AuthContext.Provider
            value={{
                user,
                userData,
                loading,
                isPremium,
                signIn,
                signOut: handleSignOut,
                refreshUserData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Hook to protect routes
export function useRequireAuth(redirectTo?: string) {
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user && redirectTo) {
            window.location.href = redirectTo;
        }
    }, [user, loading, redirectTo]);

    return { user, loading };
}

// Hook to check premium access
export function useRequirePremium() {
    const { user, isPremium, loading } = useAuth();

    return {
        user,
        isPremium,
        loading,
        canAccess: !loading && user !== null && isPremium,
    };
}
