import React, { memo, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

const Initialized: React.FC<{
  translations: {
    [language: string]: {
      [key: string]: string;
    }
  };
  language: string;
  children: ReactNode;
}> = ({ translations, language, children }) => (
  <IntlProvider
    locale={language}
    messages={translations[language]}>
    <>
      {children}
    </>
  </IntlProvider>
);

export default memo(Initialized);
