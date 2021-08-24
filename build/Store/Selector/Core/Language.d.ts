import { State } from '../../Reducer/Global';
export declare const translationLanguage: import("reselect").OutputSelector<State, import("../../../Types/Language").Language, (res: import("../../Reducer/Core/Language").State) => import("../../../Types/Language").Language>;
export declare const translations: import("reselect").OutputSelector<State, Record<string, Record<string, string>>, (res: import("../../Reducer/Core/Language").State) => Record<string, Record<string, string>>>;
