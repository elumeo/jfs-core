import { ICoreRootReducer } from '../Reducer';
import { ILanguageReducerState } from '../Reducer/LanguageReducer';
import Utilities from '../../Utilities';
import * as LanguageActions from '../Action/LanguageAction';

const TranslationsProvider = Utilities.Provider.create<
  ICoreRootReducer,
  ILanguageReducerState,
  typeof LanguageActions
>(
  LanguageActions,
  state => state.languageReducer
);

export default TranslationsProvider;
