// Site languages (Vinay, 2026-11-18): the site ships in English, Arabic and Turkish.
// Canonical registry: every page has an equivalent in each language below, built
// at /studio/{lang}/{slug}/. English lives at /studio/{slug}/. Arabic is RTL.
export const LANGUAGES = [
	{ code: 'en', name: 'English', dir: 'ltr' as const },
	{ code: 'ar', name: 'العربية', dir: 'rtl' as const },
	{ code: 'tr', name: 'Türkçe', dir: 'ltr' as const }
];

export type LangCode = (typeof LANGUAGES)[number]['code'];
