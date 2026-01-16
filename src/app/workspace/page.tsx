'use client';

import { useState, useEffect } from 'react';
import { Bookmark, FileText, CheckCircle, Circle, Trash2, Plus, Save } from 'lucide-react';
import { modules } from '@/data/techniques';

interface BookmarkedTechnique {
    moduleId: string;
    sectionId: string;
    title: string;
    tested: boolean;
}

interface Note {
    id: string;
    content: string;
    createdAt: string;
}

export default function WorkspacePage() {
    const [bookmarks, setBookmarks] = useState<BookmarkedTechnique[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const storedBookmarks = localStorage.getItem('toolkit-bookmarks');
        const storedNotes = localStorage.getItem('toolkit-notes');

        if (storedBookmarks) {
            setBookmarks(JSON.parse(storedBookmarks));
        } else {
            // Default bookmarks for demo
            setBookmarks([
                { moduleId: 'scanner', sectionId: 'eye-patterns', title: 'Eye Accessing Cues', tested: true },
                { moduleId: 'connector', sectionId: 'rapport', title: 'Rapport Mastery', tested: false },
                { moduleId: 'intervention', sectionId: 'anchoring', title: 'Anchoring', tested: false },
            ]);
        }

        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }

        setIsLoaded(true);
    }, []);

    // Save to localStorage when data changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('toolkit-bookmarks', JSON.stringify(bookmarks));
            localStorage.setItem('toolkit-notes', JSON.stringify(notes));
        }
    }, [bookmarks, notes, isLoaded]);

    const toggleTested = (sectionId: string) => {
        setBookmarks(prev => prev.map(b =>
            b.sectionId === sectionId ? { ...b, tested: !b.tested } : b
        ));
    };

    const removeBookmark = (sectionId: string) => {
        setBookmarks(prev => prev.filter(b => b.sectionId !== sectionId));
    };

    const addNote = () => {
        if (!newNote.trim()) return;

        const note: Note = {
            id: Date.now().toString(),
            content: newNote.trim(),
            createdAt: new Date().toISOString(),
        };

        setNotes(prev => [note, ...prev]);
        setNewNote('');
    };

    const deleteNote = (id: string) => {
        setNotes(prev => prev.filter(n => n.id !== id));
    };

    const getModuleColor = (moduleId: string) => {
        const colors: Record<string, string> = {
            scanner: 'var(--color-scanner)',
            connector: 'var(--color-connector)',
            intervention: 'var(--color-intervention)',
            'deep-work': 'var(--color-deepwork)',
        };
        return colors[moduleId] || 'var(--color-scanner)';
    };

    if (!isLoaded) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
            }}>
                <p style={{ color: 'var(--color-text-muted)' }}>Loading workspace...</p>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1.5rem' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{
                    margin: 0,
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                }}>
                    My Workspace
                </h1>
                <p style={{
                    margin: '0.5rem 0 0',
                    color: 'var(--color-text-secondary)',
                }}>
                    Track your progress, bookmark techniques, and keep personal notes.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem',
            }}>
                {/* Bookmarked Techniques */}
                <section>
                    <div className="section-header">
                        <Bookmark size={18} style={{ color: 'var(--color-scanner)' }} />
                        <h3>Bookmarked Techniques</h3>
                    </div>

                    {bookmarks.length === 0 ? (
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                No bookmarks yet. Browse techniques and bookmark them for quick access.
                            </p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {bookmarks.map((bookmark) => (
                                <div
                                    key={bookmark.sectionId}
                                    className="glass-card"
                                    style={{
                                        padding: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                    }}
                                >
                                    {/* Tested indicator */}
                                    <button
                                        onClick={() => toggleTested(bookmark.sectionId)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        title={bookmark.tested ? 'Mark as untested' : 'Mark as tested'}
                                    >
                                        {bookmark.tested ? (
                                            <CheckCircle size={22} style={{ color: 'var(--color-success)' }} />
                                        ) : (
                                            <Circle size={22} style={{ color: 'var(--color-text-muted)' }} />
                                        )}
                                    </button>

                                    {/* Content */}
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{
                                            margin: 0,
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            color: 'var(--color-text-primary)',
                                        }}>
                                            {bookmark.title}
                                        </h4>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            color: getModuleColor(bookmark.moduleId),
                                            textTransform: 'capitalize',
                                        }}>
                                            {bookmark.moduleId.replace('-', ' ')}
                                        </span>
                                    </div>

                                    {/* Status badge */}
                                    <span style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: 6,
                                        background: bookmark.tested
                                            ? 'rgba(34, 197, 94, 0.1)'
                                            : 'rgba(113, 113, 122, 0.1)',
                                        color: bookmark.tested
                                            ? 'var(--color-success)'
                                            : 'var(--color-text-muted)',
                                        fontWeight: 500,
                                    }}>
                                        {bookmark.tested ? 'Tested' : 'Untested'}
                                    </span>

                                    {/* Delete button */}
                                    <button
                                        onClick={() => removeBookmark(bookmark.sectionId)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '0.25rem',
                                            color: 'var(--color-text-muted)',
                                            opacity: 0.6,
                                        }}
                                        title="Remove bookmark"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Personal Notes */}
                <section>
                    <div className="section-header">
                        <FileText size={18} style={{ color: 'var(--color-connector)' }} />
                        <h3>Personal Notes</h3>
                    </div>

                    {/* Add note form */}
                    <div className="glass-card" style={{ padding: '1rem', marginBottom: '1rem' }}>
                        <textarea
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Add a reflection, insight, or note..."
                            style={{
                                width: '100%',
                                minHeight: '80px',
                                padding: '0.75rem',
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 8,
                                color: 'var(--color-text-primary)',
                                fontSize: '0.9rem',
                                resize: 'vertical',
                                fontFamily: 'inherit',
                            }}
                        />
                        <button
                            onClick={addNote}
                            disabled={!newNote.trim()}
                            className="btn btn-primary"
                            style={{
                                marginTop: '0.75rem',
                                opacity: !newNote.trim() ? 0.5 : 1,
                                cursor: !newNote.trim() ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <Plus size={16} />
                            Add Note
                        </button>
                    </div>

                    {/* Notes list */}
                    {notes.length === 0 ? (
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                No notes yet. Add reflections and insights as you practice.
                            </p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className="glass-card"
                                    style={{ padding: '1rem' }}
                                >
                                    <p style={{
                                        margin: 0,
                                        color: 'var(--color-text-primary)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.6,
                                        whiteSpace: 'pre-wrap',
                                    }}>
                                        {note.content}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '0.75rem',
                                        paddingTop: '0.75rem',
                                        borderTop: '1px solid var(--color-border)',
                                    }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--color-text-muted)',
                                        }}>
                                            {new Date(note.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </span>
                                        <button
                                            onClick={() => deleteNote(note.id)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: '0.25rem',
                                                color: 'var(--color-text-muted)',
                                                opacity: 0.6,
                                            }}
                                            title="Delete note"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
