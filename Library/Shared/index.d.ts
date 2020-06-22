import { ISharedStoreProps } from './Store';
import Messages from '../Utilities/Format/Translations/Messages';
declare class Shared {
    private static stores;
    static translations: Messages.LanguageMap;
    static addStore: (sharedStoreProps: ISharedStoreProps) => number;
    static Epic: () => any;
    static Reducer: () => any;
    static addTranslations: (translations: Messages.LanguageMap) => void;
}
export default Shared;
