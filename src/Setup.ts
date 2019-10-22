import './style/main.scss';
import * as moment from 'moment';

Date.prototype.toJSON = function() {
  return moment.default(this).format();
};
