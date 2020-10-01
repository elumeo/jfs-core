import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import Global from 'Store/Reducer/Global';
import { useSelector } from 'react-redux';
import './_styles.scss';

const Initialized: React.FC = ({ children }) => {
  const { language, translations } = useSelector<Global.State, {
    language: string;
    translations: {
      [language: string]: {
        [key: string]: string;
      }
    }
  }>(state => ({
    language: state.Core.Language.language,
    translations: state.Core.Language.messages
  }));
  return (
    <HashRouter>
      <IntlProvider
        locale={language}
        messages={translations[language]}>
        <>
          {children}
        </>
      </IntlProvider>
    </HashRouter>
  );
}

export default Initialized;
