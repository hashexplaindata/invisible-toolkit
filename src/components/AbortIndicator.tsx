'use client';

import { AlertOctagon, Phone } from 'lucide-react';

interface AbortIndicatorProps {
    onAbort: () => void;
}

export default function AbortIndicator({ onAbort }: AbortIndicatorProps) {
    return (
        <div className="abort-indicator">
            <button onClick={onAbort} className="abort-btn">
                <AlertOctagon size={20} />
                <span>Abort & Ground</span>
            </button>
        </div>
    );
}

// Grounding modal shown when abort is triggered
export function GroundingSteps({ onClose }: { onClose: () => void }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content" style={{ maxWidth: '500px' }}>
                <h2 style={{
                    margin: '0 0 1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                }}>
                    <Phone size={24} style={{ color: 'var(--color-success)' }} />
                    Grounding Protocol
                </h2>

                <div style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: 12,
                    padding: '1.25rem',
                    marginBottom: '1.5rem',
                }}>
                    <ol style={{
                        margin: 0,
                        paddingLeft: '1.25rem',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                    }}>
                        <li><strong>5 things you can SEE</strong> – Look around and name them</li>
                        <li><strong>4 things you can TOUCH</strong> – Feel the textures around you</li>
                        <li><strong>3 things you can HEAR</strong> – Listen to the sounds present</li>
                        <li><strong>2 things you can SMELL</strong> – Notice any scents</li>
                        <li><strong>1 thing you can TASTE</strong> – Be aware of your mouth</li>
                    </ol>
                </div>

                <p style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                }}>
                    Take deep, slow breaths. Feel your feet on the ground. You are safe, present, and aware.
                    Take as much time as you need before continuing.
                </p>

                <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
                    I Feel Grounded
                </button>
            </div>
        </div>
    );
}
