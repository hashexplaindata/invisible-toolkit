'use client';

import Link from 'next/link';
import { Eye, Brain, Zap, Waves, ArrowRight, Shield, Bookmark } from 'lucide-react';
import EmailCapture from '@/components/EmailCapture';
import ShareButtons from '@/components/ShareButtons';

const modules = [
  {
    id: 'scanner',
    title: 'The Scanner',
    subtitle: 'Observation & Calibration',
    description: 'Always running. Eye patterns, rep systems, and state calibration.',
    icon: Eye,
    color: 'scanner',
    href: '/scanner',
  },
  {
    id: 'connector',
    title: 'The Connector',
    subtitle: 'Rapport & Language',
    description: 'Build unconscious trust. Meta-programs and Milton Model patterns.',
    icon: Brain,
    color: 'connector',
    href: '/connector',
  },
  {
    id: 'intervention',
    title: 'The Intervention',
    subtitle: 'Strategic Change Work',
    description: 'Reframing, anchoring, submodalities, and timeline therapy.',
    icon: Zap,
    color: 'intervention',
    href: '/intervention',
  },
  {
    id: 'deep-work',
    title: 'Deep Trance Work',
    subtitle: 'Advanced Hypnotic Phenomena',
    description: 'Trance induction, deepening, and hypnotic phenomena.',
    icon: Waves,
    color: 'deepwork',
    href: '/deep-work',
    ethicsGated: true,
  },
];

export default function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, var(--color-text-primary), var(--color-scanner))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Invisible Toolkit
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '0.5rem',
        }}>
          Behavioral mastery, without the binders.
        </p>
        <p style={{
          color: 'var(--color-text-muted)',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: 1.7,
        }}>
          NLP & behavioral analysis toolkit for practitioners. Rapidly read people,
          select the right intervention, and apply techniques ethically and effectively.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/scanner" className="btn btn-primary">
            Start Scanning
            <ArrowRight size={18} />
          </Link>
          <Link href="/workspace" className="btn btn-secondary">
            <Bookmark size={18} />
            My Workspace
          </Link>
        </div>
      </section>

      {/* Module Cards */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {modules.map((module) => {
            const Icon = module.icon;
            const colorVar = `var(--color-${module.color})`;

            return (
              <Link
                key={module.id}
                href={module.href}
                className={`glass-card module-card ${module.color}`}
                style={{
                  padding: '1.5rem',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${colorVar}, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={24} style={{ color: colorVar }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                    }}>
                      {module.title}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: colorVar,
                      margin: '0.25rem 0 0',
                    }}>
                      {module.subtitle}
                    </p>
                  </div>
                </div>

                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {module.description}
                </p>

                {module.ethicsGated && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '1rem',
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: 8,
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                  }}>
                    <Shield size={14} style={{ color: 'var(--color-danger)' }} />
                    <span style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-danger)',
                      fontWeight: 500,
                    }}>
                      Ethics-Gated
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* How To Use */}
      <section className="glass-card" style={{ padding: '2rem' }}>
        <div className="section-header">
          <Brain size={20} style={{ color: 'var(--color-connector)' }} />
          <h3>How to Use This System</h3>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          <div>
            <h4 style={{
              color: 'var(--color-scanner)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}>
              Week 1-2: Scanner
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Master eye patterns, rep systems, and calibration until you see patterns without thinking.
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--color-connector)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}>
              Week 3-4: Connector
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Practice rapport and meta-program identification in every interaction.
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--color-intervention)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}>
              Week 5-8: Intervention
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Start with reframing and anchoring before moving to complex timeline work.
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--color-deepwork)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}>
              Week 9+: Deep Trance
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Add trance work only after the other layers are solid. Master basics first.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="glass-card" style={{ padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          margin: '0 0 0.5rem',
        }}>
          Get Early Access to Premium Content
        </h3>
        <p style={{
          color: 'var(--color-text-secondary)',
          marginBottom: '1.5rem',
          maxWidth: '500px',
          margin: '0 auto 1.5rem',
        }}>
          Be the first to access advanced techniques, exclusive patterns, and NLP insights.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/workspace" className="btn btn-primary">
            Join 500+ Practitioners
            <ArrowRight size={18} />
          </Link>
          <ShareButtons />
        </div>
      </section>

      {/* Email Capture Modal (scroll-triggered) */}
      <EmailCapture trigger="scroll" scrollThreshold={60} />
    </div>
  );
}
