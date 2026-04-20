import { Language } from '../locales';
import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
    listingId: string | null;
    listingTitle: string | null;
    loading: boolean;
}

export function Header({ listingId, listingTitle, loading }: HeaderProps) {
    const { t, lang, setLang } = useTranslation();

    const idText = loading
        ? t.loadingId
        : listingId
            ? `${t.listingPrefix}${listingId}`
            : t.noListingFound;

    const titleText = loading
        ? t.detectingListing
        : listingTitle || '';

    return (
        <header>
            <div class="header-top">
                <h2 id="property-id">{idText}</h2>
                <select
                    id="lang-select"
                    value={lang}
                    onChange={(e) => setLang((e.target as HTMLSelectElement).value as Language)}
                >
                    <option value="en">EN</option>
                    <option value="pt">PT</option>
                    <option value="es">ES</option>
                    <option value="it">IT</option>
                </select>
            </div>
            <p id="property-title" class="truncate">{titleText}</p>
        </header>
    );
}
