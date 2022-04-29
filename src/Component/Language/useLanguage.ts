import { useDispatch } from 'react-redux';
import { useSelector } from 'Types/Redux';
import { Language } from 'Types/Language';
import { useCallback } from 'react';
import { changeLanguageAction } from 'Store/Action';

const useLanguage = (): {
  value: Language;
  onChange: (next: Language) => void;
} => {
  const dispatch = useDispatch()
  const language = useSelector<Language>(
    state =>
      state.Core.Language.language || state.Core.Configuration.config.Language,
  );
  const onChange = useCallback((next: Language) => dispatch(changeLanguageAction(next)), [
    dispatch,
  ]);
  return {
    value: language,
    onChange,
  };
};

export default useLanguage;
