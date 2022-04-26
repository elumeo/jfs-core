import React from 'react';
import { Language } from '../../Types/Language';
import Messages from '../../Utilities/Format/Translations/Messages';
import 'Core/Style/main.scss';
import 'material-icons/iconfont/material-icons.css';
import '@fontsource/roboto';
export declare const Stateless: React.FC<{
    locale: Language;
    messages: Messages.LanguageMap;
}>;
