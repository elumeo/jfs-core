import { useDispatch } from 'react-redux';
import { useSelector } from 'Types/Redux';
import { Language } from 'Types/Language';

import { changeLanguageAction } from 'Store/Action';
import React from 'react';

const useLanguage = (): {
  value: Language;
  onChange: (next: Language) => void;
} => {
  const language = useSelector<Language>(
    state =>
      state.Core.Language.language || state.Core.Configuration.config.Language,
  );
  const dispatch = useDispatch()
  const onChange = React.useCallback((next: Language) => dispatch(changeLanguageAction(next)), [
    dispatch,
  ]);
  return {
    value: language,
    onChange,
  };
};

export default useLanguage;
