import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createReducer } from 'typesafe-actions'
import { IntlProvider } from 'react-intl'
import Global from 'Store/Reducer/Global'
import { Language } from 'Types/Language'
import Messages from 'Utilities/Format/Translations/Messages'
import 'Core/Style/main.scss'
import 'material-icons/iconfont/material-icons.css'
import '@fontsource/roboto'

export const Stateful: React.FC<{ locale: Language, messages: Messages.LanguageMap, state: Global.State }> =
  ({
     locale,
     messages,
     state,
     children
   }) => (
    <Provider store={createStore(createReducer(state))}>
      <IntlProvider locale={locale} messages={{ ...messages }}>
        <>{children}</>
      </IntlProvider>
    </Provider>
  )
