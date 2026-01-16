'use client';

import { Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
    title?: string;
    description?: string;
    url?: string;
}

export default function ShareButtons({
    title = 'Invisible Toolkit - Behavioral Mastery',
    description = 'NLP & behavioral analysis toolkit for practitioners',
    url,
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://invisible-toolkit-app.web.app');

    const shareTwitter = () => {
        const text = `${title}\n\n${description}`;
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
            '_blank',
            'width=550,height=420'
        );
    };

    const shareLinkedIn = () => {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            '_blank',
            'width=550,height=420'
        );
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
        }}>
            <span style={{
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                marginRight: '0.25rem',
            }}>
                Share:
            </span>

            <button
                onClick={shareTwitter}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--color-bg-tertiary)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                }}
                title="Share on Twitter"
                aria-label="Share on Twitter"
            >
                <Twitter size={16} />
            </button>

            <button
                onClick={shareLinkedIn}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--color-bg-tertiary)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                }}
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
            >
                <Linkedin size={16} />
            </button>

            <button
                onClick={copyLink}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: copied ? 'rgba(34, 197, 94, 0.1)' : 'var(--color-bg-tertiary)',
                    border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.3)' : 'var(--color-border)'}`,
                    color: copied ? 'var(--color-success)' : 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                }}
                title="Copy link"
                aria-label="Copy link"
            >
                {copied ? <Check size={16} /> : <Link2 size={16} />}
            </button>
        </div>
    );
}
