import './Style/main.scss';
import 'material-icons/iconfont/material-icons.css'
import '@fontsource/roboto'

const moment = require('moment');

Date.prototype.toJSON = function () {
  return moment(this).format();
};

import Translations from 'Utilities/Format/Translations';
import messages from 'Setup/Translations.json';
Translations.addMessages(messages);
