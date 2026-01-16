import { Eye } from 'lucide-react';
import { modules } from '@/data/techniques';
import TechniqueDetail from '@/components/TechniqueDetail';

export default function ScannerPage() {
    const module = modules.find(m => m.id === 'scanner')!;

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
                    background: 'linear-gradient(135deg, var(--color-scanner), rgba(99, 102, 241, 0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    <Eye size={28} style={{ color: 'white' }} />
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
                        color: 'var(--color-scanner)',
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
                    The Scanner layer is your always-on radar system. Master these foundational skills first—eye accessing cues,
                    representational systems, and state calibration—until you see patterns without thinking. This forms the
                    foundation for all other NLP work.
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
                    moduleColor="scanner"
                    defaultExpanded={idx === 0}
                />
            ))}
        </div>
    );
}
