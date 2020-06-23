declare namespace Messages {
    type Language = {
        [key: string]: string;
    };
    type LanguageMap = {
        [language: string]: Language;
    };
}
declare class Messages {
    private static mergeLanguage;
    static merge: (...translationPackages: Messages.LanguageMap[]) => Messages.LanguageMap;
}
export default Messages;
