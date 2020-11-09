import Messages from 'Utilities/Format/Translations/Messages';
class Shared {
}
Shared.translations = {};
Shared.addTranslations = (translations) => {
    Shared.translations = Messages.merge(Shared.translations, translations);
};
export default Shared;
//# sourceMappingURL=index.js.map