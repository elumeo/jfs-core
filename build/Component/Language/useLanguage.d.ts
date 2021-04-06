import { Language } from "../../Types/Language";
declare const useLanguage: () => {
    value: Language;
    onChange: import("typesafe-actions").PayloadAC<"language/CHANGE", Language>;
};
export default useLanguage;
