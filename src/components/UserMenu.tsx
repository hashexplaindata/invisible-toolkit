'use client';

import { useAuth } from './AuthProvider';
import { LogIn, LogOut, Crown, User as UserIcon } from 'lucide-react';

export default function UserMenu() {
    const { user, userData, isPremium, loading, signIn, signOut } = useAuth();

    if (loading) {
        return (
            <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--color-bg-tertiary)',
                animation: 'pulse 1.5s infinite',
            }} />
        );
    }

    if (!user) {
        return (
            <button
                onClick={signIn}
                className="btn btn-primary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
                <LogIn size={16} />
                Sign In
            </button>
        );
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {isPremium && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.25rem 0.5rem',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(234, 179, 8, 0.1))',
                    borderRadius: 6,
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                }}>
                    <Crown size={14} style={{ color: '#f59e0b' }} />
                    <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 600 }}>PRO</span>
                </div>
            )}

            <div style={{ position: 'relative' }}>
                <button
                    onClick={signOut}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        background: 'var(--color-bg-tertiary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 8,
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)',
                    }}
                    title={`Signed in as ${userData?.displayName || user.email}`}
                >
                    {user.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt={user.displayName || 'User'}
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                            }}
                        />
                    ) : (
                        <UserIcon size={18} />
                    )}
                    <LogOut size={14} style={{ opacity: 0.7 }} />
                </button>
            </div>
        </div>
    );
}
