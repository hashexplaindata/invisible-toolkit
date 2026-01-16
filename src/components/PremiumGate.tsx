'use client';

import { useAuth } from './AuthProvider';
import { Crown, Lock, ArrowRight, CheckCircle } from 'lucide-react';

interface PremiumGateProps {
    children: React.ReactNode;
    feature?: string;
}

export default function PremiumGate({ children, feature = 'this content' }: PremiumGateProps) {
    const { user, isPremium, loading, signIn } = useAuth();

    if (loading) {
        return (
            <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'var(--color-text-muted)',
            }}>
                Loading...
            </div>
        );
    }

    // Premium users get full access
    if (isPremium) {
        return <>{children}</>;
    }

    // Non-premium or not logged in
    return (
        <div className="glass-card" style={{
            padding: '2.5rem',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '2rem auto',
        }}>
            <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(234, 179, 8, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
            }}>
                <Lock size={28} style={{ color: '#f59e0b' }} />
            </div>

            <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                margin: '0 0 0.5rem',
            }}>
                Premium Content
            </h3>

            <p style={{
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
            }}>
                Unlock {feature} and get access to advanced NLP techniques.
            </p>

            {/* Features list */}
            <div style={{
                textAlign: 'left',
                background: 'var(--color-bg-tertiary)',
                borderRadius: 12,
                padding: '1rem',
                marginBottom: '1.5rem',
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                        'Full Deep Trance Work access',
                        'Advanced Intervention patterns',
                        'Cloud-synced workspace',
                        'Priority support',
                    ].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={16} style={{ color: 'var(--color-success)' }} />
                            <span style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
            }}>
                <div style={{
                    padding: '1rem',
                    background: 'var(--color-bg-secondary)',
                    borderRadius: 10,
                    border: '1px solid var(--color-border)',
                    minWidth: '120px',
                }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        $12<span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--color-text-muted)' }}>/mo</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Monthly</div>
                </div>
                <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.05))',
                    borderRadius: 10,
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    minWidth: '120px',
                }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b' }}>
                        $97
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#f59e0b' }}>Lifetime</div>
                </div>
            </div>

            {/* CTA */}
            {!user ? (
                <button onClick={signIn} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Sign In to Upgrade
                    <ArrowRight size={18} />
                </button>
            ) : (
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Crown size={18} />
                    Upgrade to Premium
                    <ArrowRight size={18} />
                </button>
            )}

            <p style={{
                marginTop: '1rem',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
            }}>
                30-day money-back guarantee
            </p>
        </div>
    );
}
