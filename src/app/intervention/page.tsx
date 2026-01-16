import { Zap } from 'lucide-react';
import { modules } from '@/data/techniques';
import TechniqueDetail from '@/components/TechniqueDetail';

export default function InterventionPage() {
    const module = modules.find(m => m.id === 'intervention')!;

    return (
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
                    background: 'linear-gradient(135deg, var(--color-intervention), rgba(245, 158, 11, 0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    <Zap size={28} style={{ color: 'white' }} />
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
                        color: 'var(--color-intervention)',
                        fontSize: '1rem',
                    }}>
                        {module.subtitle}
                    </p>
                </div>
            </div>

            {/* Module Overview */}
            <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
                <p style={{
                    margin: 0,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                }}>
                    The Intervention layer is where strategic change happens. Master reframing (instant meaning shifts),
                    anchoring (programming emotional triggers), submodalities (the control panel of experience),
                    timeline therapy, and six-step reframe. Start with reframing and anchoring before moving to complex work.
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
                    moduleColor="intervention"
                    defaultExpanded={idx === 0}
                />
            ))}
        </div>
    );
}
