import { PayloadAction } from 'typesafe-actions';
import { Language } from '../../../Types/Language';
export declare namespace changeLanguageAction {
    type Payload = Language;
    type Type = PayloadAction<string, Payload>;
}
export declare const changeLanguageAction: import("typesafe-actions").PayloadAC<"language/CHANGE", Language>;
export declare const initializeLanguage: import("typesafe-actions").EmptyAC<"language/INITIALIZE">;
