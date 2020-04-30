import './Style/main.scss';

const moment = require('moment');

Date.prototype.toJSON = function () {
  return moment(this).format();
};

import Translations from './Utilities/Format/Translations';

import messages from './Translations.json';
Translations.addMessages(messages);
