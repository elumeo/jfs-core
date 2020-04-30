import SharedComponent from './Component';
import SharedStore, { ISharedStoreProps } from './Store';

import Messages from '../Utilities/Format/Translations/Messages';
import { combineEpics } from 'redux-observable';

class Shared {
  private static components: SharedComponent<any, any>[] = [];
  private static stores: SharedStore[] = [];
  public static translations: Messages.LanguageMap = {};

  public static addComponent = <IModuleState, IComponentProps>(
    sharedComponent: SharedComponent<IModuleState, IComponentProps>
  ) => Shared.components.push(sharedComponent);

  public static addStore = (sharedStoreProps: ISharedStoreProps) => Shared.stores.push(
      new SharedStore(sharedStoreProps)
  );

  public static Epic = () => combineEpics(
    ...Shared.stores.filter(({ epic }) => epic !== null).map(({ epic }) => epic)
  );

  public static Reducer = () => {
    return Shared.stores.reduce(
        (sharedReducers, sharedStore) => ({ ...sharedReducers, ...sharedStore.reducer }),
        {}
    )
  };

  public static addTranslations = (translations: Messages.LanguageMap) => {
    Shared.translations = Messages.merge(Shared.translations, translations);
  };

  public static mount = <IRootReducer, IModuleState>(
    mapGlobalStateToModuleState: (state: IRootReducer) => IModuleState
  ) => {
    SharedComponent.mapGlobalStateToModuleState = mapGlobalStateToModuleState;
    return Shared.components.reduce(
      (mountedComponents, sharedComponent) => sharedComponent.register(mountedComponents),
      {}
    );
  };
}

export default Shared;
