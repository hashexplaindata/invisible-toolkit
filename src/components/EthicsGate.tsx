'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, X } from 'lucide-react';

interface EthicsGateProps {
    onAccept: () => void;
    onDecline: () => void;
}

export default function EthicsGate({ onAccept, onDecline }: EthicsGateProps) {
    const [hasRead, setHasRead] = useState(false);
    const [hasAcknowledged, setHasAcknowledged] = useState(false);

    return (
        <div className="modal-overlay">
            <div className="modal-content" style={{ maxWidth: '550px' }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                }}>
                    <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: 'rgba(239, 68, 68, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Shield size={24} style={{ color: 'var(--color-danger)' }} />
                    </div>
                    <div>
                        <h2 style={{
                            margin: 0,
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--color-danger)',
                        }}>
                            Ethics & Safety Gate
                        </h2>
                        <p style={{
                            margin: '0.25rem 0 0',
                            fontSize: '0.9rem',
                            color: 'var(--color-text-secondary)',
                        }}>
                            Deep Trance Work requires acknowledgment
                        </p>
                    </div>
                </div>

                {/* Warning Content */}
                <div className="ethics-warning" style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertTriangle size={18} />
                        Important Safety Information
                    </h4>

                    <div style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                    }}>
                        <p style={{ margin: '0 0 1rem' }}>
                            Deep Trance Work involves powerful techniques that can create profound psychological
                            effects. These methods should only be used:
                        </p>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>With explicit, informed consent from all participants</li>
                            <li style={{ marginBottom: '0.5rem' }}>In appropriate therapeutic or educational contexts</li>
                            <li style={{ marginBottom: '0.5rem' }}>By practitioners with adequate training and supervision</li>
                            <li style={{ marginBottom: '0.5rem' }}>With clear safety protocols and abort procedures in place</li>
                            <li>Never for manipulation, coercion, or boundary violation</li>
                        </ul>
                    </div>
                </div>

                {/* Consent Checkboxes */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="checkbox-container" style={{ marginBottom: '1rem' }}>
                        <input
                            type="checkbox"
                            checked={hasRead}
                            onChange={(e) => setHasRead(e.target.checked)}
                        />
                        <span style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>
                            I have read and understand the safety information above
                        </span>
                    </label>

                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={hasAcknowledged}
                            onChange={(e) => setHasAcknowledged(e.target.checked)}
                        />
                        <span style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>
                            I commit to using these techniques ethically and responsibly
                        </span>
                    </label>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={onDecline}
                        className="btn btn-secondary"
                        style={{ flex: 1 }}
                    >
                        Go Back
                    </button>
                    <button
                        onClick={onAccept}
                        disabled={!hasRead || !hasAcknowledged}
                        className="btn btn-primary"
                        style={{
                            flex: 1,
                            opacity: (!hasRead || !hasAcknowledged) ? 0.5 : 1,
                            cursor: (!hasRead || !hasAcknowledged) ? 'not-allowed' : 'pointer',
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

// Hook to manage ethics consent state
export function useEthicsConsent() {
    const [hasConsented, setHasConsented] = useState<boolean | null>(null);

    useEffect(() => {
        // Check sessionStorage for existing consent
        const stored = sessionStorage.getItem('deepwork-ethics-consent');
        setHasConsented(stored === 'true');
    }, []);

    const grantConsent = () => {
        sessionStorage.setItem('deepwork-ethics-consent', 'true');
        setHasConsented(true);
    };

    const revokeConsent = () => {
        sessionStorage.removeItem('deepwork-ethics-consent');
        setHasConsented(false);
    };

    return { hasConsented, grantConsent, revokeConsent };
}
