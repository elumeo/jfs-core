import SharedStore from './Store';
import Messages from '../Utilities/Format/Translations/Messages';
import { combineEpics } from 'redux-observable';
class Shared {
}
Shared.stores = [];
Shared.translations = {};
Shared.addStore = (sharedStoreProps) => Shared.stores.push(new SharedStore(sharedStoreProps));
Shared.Epic = () => combineEpics(...Shared.stores.filter(({ epic }) => epic !== null).map(({ epic }) => epic));
Shared.Reducer = () => {
    return Shared.stores.reduce((sharedReducers, sharedStore) => (Object.assign(Object.assign({}, sharedReducers), sharedStore.reducer)), {});
};
Shared.addTranslations = (translations) => {
    Shared.translations = Messages.merge(Shared.translations, translations);
};
export default Shared;
//# sourceMappingURL=index.js.map