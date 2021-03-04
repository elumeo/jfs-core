import './Style/main.scss';
const moment = require('moment');
Date.prototype.toJSON = function () {
    return moment(this).format();
};
console.log('I AM ALIVE');
//# sourceMappingURL=Setup.js.map