'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/scanner', label: 'Scanner' },
    { href: '/connector', label: 'Connector' },
    { href: '/intervention', label: 'Intervention' },
    { href: '/deep-work', label: 'Deep Work' },
    { href: '/workspace', label: 'Workspace' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(15, 15, 18, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '72px',
            }}>
                {/* Logo */}
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    color: 'var(--color-text-primary)',
                }}>
                    <Compass size={28} style={{ color: 'var(--color-scanner)' }} />
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                    }}>
                        Invisible Toolkit
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }} className="desktop-nav">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/' && pathname?.startsWith(item.href));
                        const isDeepWork = item.href === '/deep-work';

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                                style={{
                                    color: isDeepWork && isActive
                                        ? 'var(--color-danger)'
                                        : isActive
                                            ? 'var(--color-scanner)'
                                            : 'var(--color-text-secondary)',
                                    background: isActive
                                        ? isDeepWork
                                            ? 'rgba(239, 68, 68, 0.1)'
                                            : 'rgba(99, 102, 241, 0.1)'
                                        : 'transparent',
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        padding: '0.5rem',
                    }}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        position: 'absolute',
                        top: '72px',
                        left: 0,
                        right: 0,
                        background: 'var(--color-bg-secondary)',
                        borderBottom: '1px solid var(--color-border)',
                        padding: '1rem',
                    }}
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/' && pathname?.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    color: isActive ? 'var(--color-scanner)' : 'var(--color-text-primary)',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
}
