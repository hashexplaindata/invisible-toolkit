'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Waves, Shield } from 'lucide-react';
import { modules } from '@/data/techniques';
import TechniqueDetail from '@/components/TechniqueDetail';
import EthicsGate, { useEthicsConsent } from '@/components/EthicsGate';
import AbortIndicator, { GroundingSteps } from '@/components/AbortIndicator';

export default function DeepWorkPage() {
    const router = useRouter();
    const module = modules.find(m => m.id === 'deep-work')!;
    const { hasConsented, grantConsent, revokeConsent } = useEthicsConsent();
    const [showGrounding, setShowGrounding] = useState(false);

    // Loading state while checking consent
    if (hasConsented === null) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
            }}>
                <p style={{ color: 'var(--color-text-muted)' }}>Loading...</p>
            </div>
        );
    }

    // Show ethics gate if not consented
    if (!hasConsented) {
        return (
            <EthicsGate
                onAccept={grantConsent}
                onDecline={() => router.push('/')}
            />
        );
    }

    const handleAbort = () => {
        setShowGrounding(true);
    };

    return (
        <>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                {/* Module Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '2rem',
                }}>
                    <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: 'linear-gradient(135deg, var(--color-deepwork), rgba(239, 68, 68, 0.3))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}>
                        <Waves size={28} style={{ color: 'white' }} />
                    </div>
                    <div>
                        <h1 style={{
                            margin: 0,
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            color: 'var(--color-text-primary)',
                        }}>
                            {module.title}
                        </h1>
                        <p style={{
                            margin: '0.25rem 0 0',
                            color: 'var(--color-deepwork)',
                            fontSize: '1rem',
                        }}>
                            {module.subtitle}
                        </p>
                    </div>
                </div>

                {/* Ethics Banner */}
                <div className="ethics-warning" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <Shield size={20} style={{ color: 'var(--color-danger)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                            <h4 style={{
                                margin: '0 0 0.5rem',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: 'var(--color-danger)',
                            }}>
                                Ethics-Gated Module
                            </h4>
                            <p style={{
                                margin: 0,
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                            }}>
                                These techniques require explicit consent, appropriate context, and clear safety protocols.
                                The Abort button is always available if you or your subject needs to stop and ground.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Module Overview */}
                <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
                    <p style={{
                        margin: 0,
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                    }}>
                        Deep Trance Work is the foundation of powerful NLP. Trance induction, deepening techniques, and
                        hypnotic phenomena become available only after mastering the other layers. Remember: you cannot
                        guide others somewhere you have not been yourself. Practice self-hypnosis first.
                    </p>
                </div>

                {/* Techniques */}
                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 1rem',
                }}>
                    Techniques
                </h2>

                {module.sections.map((section, idx) => (
                    <TechniqueDetail
                        key={section.id}
                        section={section}
                        moduleColor="deepwork"
                        defaultExpanded={idx === 0}
                    />
                ))}

                {/* Spacer for abort button */}
                <div style={{ height: '80px' }} />
            </div>

            {/* Abort Indicator - always visible */}
            <AbortIndicator onAbort={handleAbort} />

            {/* Grounding Modal */}
            {showGrounding && (
                <GroundingSteps onClose={() => setShowGrounding(false)} />
            )}
        </>
    );
}
