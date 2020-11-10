import { PayloadAction } from 'typesafe-actions';
import * as Country from '../../Types/Country';
export declare namespace setLocale {
    type Payload = {
        locale: Country.Locale;
    };
    type Type = PayloadAction<string, Payload>;
}
export declare const setLocale: import("typesafe-actions").PayloadAC<"locale/SET_LOCALE", setLocale.Payload>;
