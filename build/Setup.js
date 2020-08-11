import './Style/main.scss';
const moment = require('moment');
Date.prototype.toJSON = function () {
    return moment(this).format();
};
import Translations from './Utilities/Format/Translations';
import messages from './Setup/Translations.json';
Translations.addMessages(messages);
// TEST
//# sourceMappingURL=Setup.js.map