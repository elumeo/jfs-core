import React from 'react';
import { IntlProvider } from 'react-intl';
import useSelector from 'Store/useSelector';

export type Props = {
  translations: Record<string, Record<string, string>>;
};

const International: React.FC<Props> = ({ translations, children }) => {
  const locale = useSelector(state => state.Core.Language.language);
  return (
    <IntlProvider
      locale={locale}
      messages={translations[locale] || {}}>
      {children}
    </IntlProvider>
  );
}

export default International;