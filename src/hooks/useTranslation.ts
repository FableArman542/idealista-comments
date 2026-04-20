import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { translations, Language, TranslationKeys } from '../locales';

interface TranslationContext {
    t: typeof translations['en'];
    lang: Language;
    setLang: (lang: Language) => void;
}

export const I18nContext = createContext<TranslationContext>({
    t: translations.en,
    lang: 'en',
    setLang: () => {},
});

export function useTranslation() {
    return useContext(I18nContext);
}
