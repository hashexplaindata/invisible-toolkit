'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import type { Section, Pattern } from '@/data/techniques';

interface TechniqueDetailProps {
    section: Section;
    moduleColor: 'scanner' | 'connector' | 'intervention' | 'deepwork';
    defaultExpanded?: boolean;
}

export default function TechniqueDetail({ section, moduleColor, defaultExpanded = false }: TechniqueDetailProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const colorVar = `var(--color-${moduleColor})`;

    return (
        <div
            className="glass-card"
            style={{
                marginBottom: '1rem',
                overflow: 'hidden',
                borderLeft: `3px solid ${colorVar}`,
            }}
        >
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                }}
            >
                <h3 style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                }}>
                    {section.title}
                </h3>
                {isExpanded ? (
                    <ChevronDown size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
                ) : (
                    <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
                )}
            </button>

            {/* Content */}
            {isExpanded && (
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                    {/* Principle */}
                    <div style={{
                        background: `linear-gradient(135deg, ${colorVar}15, transparent)`,
                        border: `1px solid ${colorVar}30`,
                        borderRadius: 12,
                        padding: '1rem',
                        marginBottom: '1.5rem',
                    }}>
                        <p style={{
                            margin: 0,
                            color: 'var(--color-text-primary)',
                            lineHeight: 1.7,
                            fontSize: '0.95rem',
                        }}>
                            <strong style={{ color: colorVar }}>Core Principle:</strong>{' '}
                            {section.principle}
                        </p>
                    </div>

                    {/* Patterns */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {section.patterns.map((pattern, idx) => (
                            <PatternCard key={idx} pattern={pattern} colorVar={colorVar} />
                        ))}
                    </div>

                    {/* Backfire Warning */}
                    {section.backfire && (
                        <div style={{
                            marginTop: '1.5rem',
                            background: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: 12,
                            padding: '1rem',
                        }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <AlertTriangle size={20} style={{ color: 'var(--color-danger)', flexShrink: 0, marginTop: 2 }} />
                                <div>
                                    <h4 style={{
                                        margin: '0 0 0.5rem',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        color: 'var(--color-danger)',
                                    }}>
                                        When NOT to Use / Backfire Prevention
                                    </h4>
                                    <p style={{
                                        margin: 0,
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.7,
                                    }}>
                                        {section.backfire}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Practice */}
                    {section.practice && (
                        <div style={{
                            marginTop: '1rem',
                            background: 'rgba(34, 197, 94, 0.08)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            borderRadius: 12,
                            padding: '1rem',
                        }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <CheckCircle size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: 2 }} />
                                <div>
                                    <h4 style={{
                                        margin: '0 0 0.5rem',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        color: 'var(--color-success)',
                                    }}>
                                        Practice Exercise
                                    </h4>
                                    <p style={{
                                        margin: 0,
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.7,
                                    }}>
                                        {section.practice}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function PatternCard({ pattern, colorVar }: { pattern: Pattern; colorVar: string }) {
    return (
        <div style={{
            background: 'var(--color-bg-tertiary)',
            borderRadius: 10,
            padding: '1rem',
            border: '1px solid var(--color-border)',
        }}>
            <h4 style={{
                margin: '0 0 0.75rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: colorVar,
            }}>
                {pattern.cue}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                    }}>
                        What it means
                    </span>
                    <p style={{
                        margin: '0.25rem 0 0',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                    }}>
                        {pattern.means}
                    </p>
                </div>

                <div>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                    }}>
                        How to use it
                    </span>
                    <p style={{
                        margin: '0.25rem 0 0',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                    }}>
                        {pattern.use}
                    </p>
                </div>

                <div style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '3px solid var(--color-scanner)',
                    borderRadius: '0 8px 8px 0',
                    padding: '0.75rem',
                    marginTop: '0.25rem',
                }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <Lightbulb size={16} style={{ color: 'var(--color-scanner)', flexShrink: 0, marginTop: 2 }} />
                        <div>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                color: 'var(--color-scanner)',
                            }}>
                                Real-World Example
                            </span>
                            <p style={{
                                margin: '0.25rem 0 0',
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.85rem',
                                lineHeight: 1.6,
                                fontStyle: 'italic',
                            }}>
                                {pattern.context}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
