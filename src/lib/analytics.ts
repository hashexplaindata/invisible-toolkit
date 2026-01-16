// Analytics utility for tracking user behavior
// Currently using console logging, can be swapped for Plausible/GA

type EventName =
    | 'page_view'
    | 'module_click'
    | 'technique_view'
    | 'email_signup'
    | 'ethics_consent'
    | 'abort_triggered'
    | 'bookmark_add'
    | 'bookmark_remove'
    | 'note_add';

interface EventProperties {
    [key: string]: string | number | boolean;
}

// Track custom events
export function trackEvent(name: EventName, properties?: EventProperties) {
    // Log in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] ${name}`, properties);
    }

    // Plausible integration (when configured)
    if (typeof window !== 'undefined' && (window as unknown as { plausible?: (name: string, options?: { props: EventProperties }) => void }).plausible) {
        (window as unknown as { plausible: (name: string, options?: { props: EventProperties }) => void }).plausible(name, properties ? { props: properties } : undefined);
    }
}

// Track page views (call in layout or page components)
export function trackPageView(page: string) {
    trackEvent('page_view', { page });
}

// Helper functions for common events
export const analytics = {
    moduleClick: (moduleId: string) =>
        trackEvent('module_click', { module: moduleId }),

    techniqueView: (moduleId: string, sectionId: string) =>
        trackEvent('technique_view', { module: moduleId, section: sectionId }),

    emailSignup: (source: string) =>
        trackEvent('email_signup', { source }),

    ethicsConsent: () =>
        trackEvent('ethics_consent'),

    abortTriggered: () =>
        trackEvent('abort_triggered'),

    bookmark: (action: 'add' | 'remove', techniqueId: string) =>
        trackEvent(action === 'add' ? 'bookmark_add' : 'bookmark_remove', { technique: techniqueId }),

    noteAdd: () =>
        trackEvent('note_add'),
};
