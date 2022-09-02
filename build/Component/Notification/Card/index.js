"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var styles_1 = require("@mui/styles");
var react_intl_1 = require("react-intl");
var Content_1 = __importDefault(require("./Content"));
var Header_1 = __importDefault(require("./Header"));
var Actions_1 = __importDefault(require("./Actions"));
var Footer_1 = __importDefault(require("./Footer"));
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
var useStyles = (0, styles_1.makeStyles)(function (props) {
    var _a, _b, _c, _d;
    return ({
        root: {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '1fr auto',
            gridTemplateRows: 'auto auto',
            maxWidth: Definition_1.default.spacing(60),
            minHeight: 'fit-content',
            backgroundColor: ((_b = (_a = Definition_1.default.palette) === null || _a === void 0 ? void 0 : _a[props.variant]) === null || _b === void 0 ? void 0 : _b['main']) || Definition_1.default.palette['grey']['A400'],
            color: ((_d = (_c = Definition_1.default.palette) === null || _c === void 0 ? void 0 : _c[props.variant]) === null || _d === void 0 ? void 0 : _d['contrastText']) || Definition_1.default.palette['grey']['50']
        }
    });
});
var Card = function (_a) {
    var notification = _a.notification, temporary = _a.temporary;
    var isTranslationId = notification.isTranslationId;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var classes = useStyles(notification);
    var title = isTranslationId && notification.title
        ? formatMessage({ id: notification.title })
        : notification.title;
    var subtitle = isTranslationId && notification.subtitle
        ? formatMessage({ id: notification.subtitle })
        : notification.subtitle;
    var content = isTranslationId && notification.content
        ? formatMessage({ id: notification.content })
        : notification.content;
    return (react_1.default.createElement(Card_1.default, { className: classes.root },
        react_1.default.createElement(Header_1.default, { title: title, subtitle: subtitle || content, variant: notification.variant }),
        react_1.default.createElement(Content_1.default, null, subtitle ? content : null),
        react_1.default.createElement(Actions_1.default, { id: notification === null || notification === void 0 ? void 0 : notification.id, action: notification.action, temporary: temporary }),
        react_1.default.createElement(Footer_1.default, { timeStamp: !temporary && notification.timeStamp || undefined, httpDetails: notification.httpDetails })));
};
exports.default = react_1.default.memo(Card);
