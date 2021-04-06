import { useSelector } from "Types/Redux";
import { Language } from "Types/Language";
import useActions from "Store/useActions";

const useLanguage = () => {
  const language = useSelector<Language>(state => (
    state.Core.Language.language ||
    state.Core.Configuration.config.Language
  ));
  const { changeLanguageAction } = useActions();

  return {
    value: language,
    onChange: (next: Language) => {
      changeLanguageAction(next);
    }
  }
};

export default useLanguage;
