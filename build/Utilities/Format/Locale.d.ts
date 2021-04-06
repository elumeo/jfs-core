import { Language } from "../../Types/Language";
import * as Country from '../../Types/Country';
export declare let locale: Country.Locale;
export declare const setLocale: (next: Country.Locale) => void;
export declare const mapProductLanguageToLocale: (productLanguage: string) => "en_gb" | "es_es" | "fr_fr" | "it_it" | "nl_nl" | "de_de";
export declare const mapLanguageToLocale: (language: Language) => Country.Locale;
