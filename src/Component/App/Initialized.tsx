import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import * as Notification from 'Component/Notification';
import { SnackbarProvider } from 'notistack';

const Initialized: React.FC<{
  translations: Record<string, Record<string, string>>;
  language: string;
  children: React.ReactNode;
}> = ({ translations, language, children }) => (
  <IntlProvider locale={language} messages={translations[language]}>
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        maxSnack={5}
        domRoot={document.getElementById('overlay')}>
        <Notification.Notistack />
        {children}
      </SnackbarProvider>
    </>
  </IntlProvider>
);

export default memo(Initialized);
