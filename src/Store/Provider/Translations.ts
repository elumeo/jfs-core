import { ICoreRootReducer } from '../Reducer';
import { ILanguageReducerState } from '../Reducer/LanguageReducer';
import Utilities from '../../Utilities';
import * as LanguageActions from '../Action/LanguageAction';

const TranslationsProvider = Utilities.Provider<
  ILanguageReducerState,
  ICoreRootReducer,
  typeof LanguageActions
>({
  actions: LanguageActions,
  mapToProviderState: state => state.languageReducer
});

export default TranslationsProvider;
