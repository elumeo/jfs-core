import Messages from '../../Utilities/Format/Translations/Messages';
declare class Shared {
    static translations: Messages.LanguageMap;
    static addTranslations: (translations: Messages.LanguageMap) => void;
}
export default Shared;
