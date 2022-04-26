import React from 'react'
import { IntlProvider } from 'react-intl'
import { Language } from 'Types/Language'
import Messages from 'Utilities/Format/Translations/Messages'
import 'Core/Style/main.scss'
import 'material-icons/iconfont/material-icons.css'
import '@fontsource/roboto'

export const Stateless: React.FC<{ locale: Language, messages: Messages.LanguageMap }> =
  ({
     locale,
     messages,
     children
   }) => (
    <IntlProvider locale={locale} messages={{ ...messages }}>
      <>{children}</>
    </IntlProvider>
  )
