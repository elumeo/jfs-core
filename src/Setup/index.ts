import moment from 'moment';
import 'material-icons/iconfont/material-icons.css'
import '@fontsource/roboto'

Date.prototype.toJSON = function () {
  return moment(this).format();
};

export * as Translations from './Locale';
export { default as Navigation } from './Navigation';
export { default as Routes } from './Routes';
