import { useMemo } from 'preact/hooks';
import { useTranslation } from '../hooks/useTranslation';
import { Language } from '../locales';

interface AffiliateLink {
    label: string;
    url: string;
    icon: string;
}

// Placeholder URLs — replace with your actual affiliate tracking links
const AFFILIATE_LINKS: Record<Language, AffiliateLink[]> = {
    pt: [
        { label: 'compareMortgages', url: 'https://www.comparaja.pt/credito-habitacao', icon: '🏦' },
        { label: 'homeInsurance', url: 'https://www.comparaja.pt/seguros/habitacao', icon: '🛡' },
        { label: 'movingServices', url: 'https://www.fixando.pt/mudancas', icon: '📦' },
    ],
    es: [
        { label: 'compareMortgages', url: 'https://www.helpmycash.com/hipotecas/', icon: '🏦' },
        { label: 'homeInsurance', url: 'https://www.rastreator.com/seguros-de-hogar.html', icon: '🛡' },
        { label: 'movingServices', url: 'https://www.mudanzasbaratas.com/', icon: '📦' },
    ],
    it: [
        { label: 'compareMortgages', url: 'https://www.mutuionline.it/', icon: '🏦' },
        { label: 'homeInsurance', url: 'https://www.facile.it/assicurazioni-casa.html', icon: '🛡' },
        { label: 'movingServices', url: 'https://www.traslochifacile.it/', icon: '📦' },
    ],
    en: [
        { label: 'compareMortgages', url: 'https://www.comparaja.pt/credito-habitacao', icon: '🏦' },
        { label: 'homeInsurance', url: 'https://www.comparaja.pt/seguros/habitacao', icon: '🛡' },
        { label: 'movingServices', url: 'https://www.fixando.pt/mudancas', icon: '📦' },
    ],
};

export function AffiliateBar() {
    const { t, lang } = useTranslation();

    // Pick 2 random links per popup open
    const links = useMemo(() => {
        const all = AFFILIATE_LINKS[lang] || AFFILIATE_LINKS.en;
        const shuffled = [...all].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 2);
    }, [lang]);

    const handleClick = (url: string) => {
        chrome.tabs.create({ url });
    };

    return (
        <div class="affiliate-bar">
            <span class="affiliate-label">{t.sponsored}</span>
            <div class="affiliate-links">
                {links.map((link) => (
                    <span
                        key={link.label}
                        class="affiliate-link"
                        onClick={() => handleClick(link.url)}
                    >
                        {link.icon} {t[link.label as keyof typeof t] || link.label}
                    </span>
                ))}
            </div>
        </div>
    );
}
