import './style/main.scss';

const moment = require('moment');

Date.prototype.toJSON = function () {
  return moment(this).format();
};