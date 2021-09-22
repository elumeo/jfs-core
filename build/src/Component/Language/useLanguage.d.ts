import { Language } from '../../../Types/Language';
declare const useLanguage: () => {
    value: Language;
    onChange: (next: Language) => void;
};
export default useLanguage;
