import { useSelector } from "Types/Redux";
import { Language } from "Types/Language";
import { useCallback } from "react";
import useActions from "Store/useActions";

const useLanguage = (): {
  value: Language;
  onChange: (next: Language) => void;
} => {
  const language = useSelector<Language>(state => (
    state.Core.Language.language ||
    state.Core.Configuration.config.Language
  ));
  const { changeLanguageAction } = useActions();
  const onChange = useCallback(
    (next: Language) =>
      changeLanguageAction(next)
  , [changeLanguageAction])
  return {
    value: language,
    onChange
  }
};

export default useLanguage;
