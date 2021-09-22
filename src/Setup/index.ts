import moment from 'moment';

Date.prototype.toJSON = function () {
  return moment(this).format();
};

export * as Translations from './Locale';
export { default as Navigation } from './Navigation';
export { default as Routes } from './Routes';
