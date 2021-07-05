import { Language } from "../../../Types/Language";
declare const useLanguage: () => {
    value: Language;
    onChange: (next: Language) => import("typesafe-actions").PayloadAction<"language/CHANGE", Language>;
};
export default useLanguage;
