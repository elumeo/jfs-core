import './Style/main.scss';
const moment = require('moment');
Date.prototype.toJSON = function () {
    return moment(this).format();
};
//# sourceMappingURL=Setup.js.map