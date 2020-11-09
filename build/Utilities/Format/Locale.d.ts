import { Language } from "Types/Language";
import * as Country from 'Types/Country';
declare class Locale {
    static locale: Country.Locale;
    static setLocale: (locale: Country.Locale) => void;
    static mapProductLanguageToLocale: (productLanguage: string) => "en_gb" | "es_es" | "fr_fr" | "it_it" | "nl_nl" | "de_de";
    static mapLanguageToLocale: (language: Language) => Country.Locale;
}
export default Locale;
