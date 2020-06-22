import Utilities from '../../Utilities';
import * as LanguageActions from '../Action/LanguageAction';
const TranslationsProvider = Utilities.Enhancer.Store(LanguageActions, state => state.Core.Language);
export default TranslationsProvider;
//# sourceMappingURL=Translations.js.map