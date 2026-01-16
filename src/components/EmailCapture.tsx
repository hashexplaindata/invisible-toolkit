'use client';

import { useState, useEffect } from 'react';
import { X, Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface EmailCaptureProps {
    trigger?: 'scroll' | 'exit' | 'button' | 'none';
    scrollThreshold?: number; // percentage of page
}

export default function EmailCapture({ trigger = 'scroll', scrollThreshold = 50 }: EmailCaptureProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown this session
        const shown = sessionStorage.getItem('email-capture-shown');
        if (shown) {
            setHasShown(true);
            return;
        }

        if (trigger === 'scroll') {
            const handleScroll = () => {
                const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                if (scrollPercent > scrollThreshold && !hasShown) {
                    setIsOpen(true);
                    setHasShown(true);
                    sessionStorage.setItem('email-capture-shown', 'true');
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }

        if (trigger === 'exit') {
            const handleMouseLeave = (e: MouseEvent) => {
                if (e.clientY < 10 && !hasShown) {
                    setIsOpen(true);
                    setHasShown(true);
                    sessionStorage.setItem('email-capture-shown', 'true');
                }
            };

            document.addEventListener('mouseleave', handleMouseLeave);
            return () => document.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [trigger, scrollThreshold, hasShown]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status === 'loading') return;

        setStatus('loading');

        try {
            // Store in localStorage for now (will integrate with email service later)
            const subscribers = JSON.parse(localStorage.getItem('toolkit-subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('toolkit-subscribers', JSON.stringify(subscribers));
            }

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 800));

            setStatus('success');
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } catch {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" style={{ zIndex: 200 }}>
            <div className="modal-content" style={{ maxWidth: '480px', position: 'relative' }}>
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                        padding: 4,
                    }}
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <CheckCircle size={48} style={{ color: 'var(--color-success)', marginBottom: '1rem' }} />
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            margin: '0 0 0.5rem',
                        }}>
                            You&apos;re on the list!
                        </h3>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                            We&apos;ll notify you when premium techniques drop.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: 64,
                                height: 64,
                                borderRadius: 16,
                                background: 'linear-gradient(135deg, var(--color-scanner), var(--color-connector))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                            }}>
                                <Mail size={28} style={{ color: 'white' }} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                color: 'var(--color-text-primary)',
                                margin: '0 0 0.5rem',
                            }}>
                                Get Early Access
                            </h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                margin: 0,
                                lineHeight: 1.6,
                            }}>
                                Be the first to access premium techniques, advanced patterns,
                                and exclusive NLP insights.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div style={{
                                display: 'flex',
                                gap: '0.75rem',
                                flexDirection: 'column',
                            }}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        background: 'var(--color-bg-primary)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 10,
                                        color: 'var(--color-text-primary)',
                                        fontSize: '1rem',
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        opacity: status === 'loading' ? 0.7 : 1,
                                    }}
                                >
                                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>

                        {/* Social proof */}
                        <p style={{
                            textAlign: 'center',
                            marginTop: '1rem',
                            fontSize: '0.85rem',
                            color: 'var(--color-text-muted)',
                        }}>
                            Join 500+ NLP practitioners already on the list
                        </p>

                        {status === 'error' && (
                            <p style={{
                                textAlign: 'center',
                                marginTop: '0.5rem',
                                fontSize: '0.85rem',
                                color: 'var(--color-danger)',
                            }}>
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

// Button to manually trigger email capture
export function EmailCaptureButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="btn btn-secondary">
                <Mail size={18} />
                Join Waitlist
            </button>
            {isOpen && <EmailCaptureInline onClose={() => setIsOpen(false)} />}
        </>
    );
}

function EmailCaptureInline({ onClose }: { onClose: () => void }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        const subscribers = JSON.parse(localStorage.getItem('toolkit-subscribers') || '[]');
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('toolkit-subscribers', JSON.stringify(subscribers));
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        setStatus('success');
        setTimeout(onClose, 1500);
    };

    return (
        <div className="modal-overlay" style={{ zIndex: 200 }}>
            <div className="modal-content" style={{ maxWidth: '400px' }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                    }}
                >
                    <X size={18} />
                </button>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                        <CheckCircle size={40} style={{ color: 'var(--color-success)' }} />
                        <p style={{ color: 'var(--color-text-primary)', marginTop: '0.5rem' }}>You&apos;re in!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h4 style={{ margin: '0 0 1rem', color: 'var(--color-text-primary)' }}>
                            Get Early Access
                        </h4>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 8,
                                color: 'var(--color-text-primary)',
                                marginBottom: '0.75rem',
                            }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', justifyContent: 'center' }}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
