import { State } from '../../../../Store/Reducer/Global';
export declare const translationLanguage: import("reselect").OutputSelector<State, import("../../../Types/Language").Language, (res: import("../../Reducer/Core/Language").State) => import("../../../Types/Language").Language>;
export declare const translations: import("reselect").OutputSelector<State, {
    [locale: string]: {
        [key: string]: string;
    };
}, (res: import("../../Reducer/Core/Language").State) => {
    [locale: string]: {
        [key: string]: string;
    };
}>;
