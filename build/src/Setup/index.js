import moment from 'moment';
Date.prototype.toJSON = function () {
    return moment(this).format();
};
export { default as Translations } from './Translations.json';
export { default as Navigation } from './Navigation';
export { default as Routes } from './Routes';
