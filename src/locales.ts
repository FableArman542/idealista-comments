// src/locales.ts

export const translations = {
    en: {
        loadingId: "Loading ID...",
        detectingListing: "Detecting listing...",
        postingAs: "Posting as:",
        anonUser: "AnonUser",
        noComments: "No comments yet. Be the first!",
        price: "Price",
        noise: "Noise",
        security: "Security",
        accesses: "Accesses",
        post: "Post",
        placeholder: "Is the price fair? How is the neighborhood?",
        noListingFound: "No Listing Found",
        navigateMessage: "Please navigate to an idealista listing.",
        listingPrefix: "Listing #",
        guest: "Guest"
    },
    pt: {
        loadingId: "A carregar ID...",
        detectingListing: "A detetar anúncio...",
        postingAs: "Publicando como:",
        anonUser: "UtilizadorAnónimo",
        noComments: "Sem comentários. Seja o primeiro!",
        price: "Preço",
        noise: "Ruído",
        security: "Segurança",
        accesses: "Acessos",
        post: "Publicar",
        placeholder: "O preço é justo? Como é o bairro?",
        noListingFound: "Anúncio não encontrado",
        navigateMessage: "Por favor navegue para um anúncio do idealista.",
        listingPrefix: "Anúncio #",
        guest: "Visitante"
    }
};

export type Language = 'en' | 'pt';
export type TranslationKeys = keyof typeof translations.en;

