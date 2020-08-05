declare class Locale {
    static selectedLanguage: string;
    static selectLanguage: (language: string) => void;
    static mapProductLanguageToLocale: (productLanguage: string) => "en_gb" | "es_es" | "fr_fr" | "it_it" | "nl_nl" | "de_de";
}
export default Locale;
