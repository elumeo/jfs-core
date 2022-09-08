"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var styles_1 = require("@material-ui/core/styles");
var react_intl_1 = require("react-intl");
var Content_1 = __importDefault(require("./Content"));
var Header_1 = __importDefault(require("./Header"));
var Actions_1 = __importDefault(require("./Actions"));
var Footer_1 = __importDefault(require("./Footer"));
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: 'auto auto',
        maxWidth: theme.spacing(60),
        minHeight: 'fit-content',
        backgroundColor: function (props) { var _a, _b; return ((_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[props.variant]) === null || _b === void 0 ? void 0 : _b['main']) || theme.palette['grey']['A400']; },
        color: function (props) { var _a, _b; return ((_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[props.variant]) === null || _b === void 0 ? void 0 : _b['contrastText']) || theme.palette['grey']['50']; }
    },
    footer: {
        gridColumnStart: 1,
        gridColumnEnd: 'none',
        textAlign: 'right',
        padding: theme.spacing(0, 2),
        '& > *': {
            margin: theme.spacing(1, 0)
        }
    }
}); });
var Card = function (_a) {
    var notification = _a.notification, temporary = _a.temporary;
    var variant = notification.variant, isTranslationId = notification.isTranslationId;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var _b = useStyles({ variant: variant }), root = _b.root, footer = _b.footer;
    var title = isTranslationId && notification.title
        ? formatMessage({ id: notification.title })
        : notification.title;
    var subtitle = isTranslationId && notification.subtitle
        ? formatMessage({ id: notification.subtitle })
        : notification.subtitle;
    var content = isTranslationId && notification.content
        ? formatMessage({ id: notification.content })
        : notification.content;
    return (react_1.default.createElement(Card_1.default, { className: root },
        react_1.default.createElement(Header_1.default, { title: title, subtitle: subtitle || content, variant: notification.variant }),
        react_1.default.createElement(Content_1.default, null, subtitle ? content : null),
        react_1.default.createElement(Actions_1.default, { id: notification === null || notification === void 0 ? void 0 : notification.id, action: notification.action, temporary: temporary }),
        react_1.default.createElement(Footer_1.default, { className: footer, timeStamp: !temporary && notification.timeStamp || undefined, httpDetails: notification.httpDetails })));
};
exports.default = react_1.default.memo(Card);
