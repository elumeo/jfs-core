"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var react_intl_1 = require("react-intl");
var Content_1 = __importDefault(require("./Content"));
var Header_1 = __importDefault(require("./Header"));
var notistack_1 = require("notistack");
var Actions_1 = __importDefault(require("./Actions"));
var Footer_1 = __importDefault(require("./Footer"));
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
var colors_1 = require("@mui/material/colors");
var _getStyles = function (_a) {
    var _b, _c, _d, _e;
    var variant = _a.variant;
    return ({
        root: {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '1fr auto',
            gridTemplateRows: 'auto auto',
            maxWidth: Definition_1.default.spacing(60),
            minHeight: 'fit-content',
            backgroundColor: ((_c = (_b = Definition_1.default.colorSchemes.light.palette) === null || _b === void 0 ? void 0 : _b[variant]) === null || _c === void 0 ? void 0 : _c['main']) || colors_1.grey[400],
            color: ((_e = (_d = Definition_1.default.colorSchemes.light.palette) === null || _d === void 0 ? void 0 : _d[variant]) === null || _e === void 0 ? void 0 : _e['contrastText']) || colors_1.grey[50]
        },
        footer: {
            gridColumnStart: 1,
            gridColumnEnd: 'none',
            textAlign: 'right',
            padding: Definition_1.default.spacing(0, 2),
            '& > *': {
                margin: Definition_1.default.spacing(1, 0)
            }
        }
    });
};
var Card = react_1.default.forwardRef(function (_a, ref) {
    var notification = _a.notification, temporary = _a.temporary;
    var variant = notification.variant, isTranslationId = notification.isTranslationId;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var _b = react_1.default.useMemo(function () { return _getStyles({ variant: variant }); }, [variant]), root = _b.root, footer = _b.footer;
    var title = isTranslationId && notification.title
        ? formatMessage({ id: notification.title })
        : notification.title;
    var subtitle = isTranslationId && notification.subtitle
        ? formatMessage({ id: notification.subtitle })
        : notification.subtitle;
    var content = isTranslationId && notification.content
        ? formatMessage({ id: notification.content })
        : notification.content;
    return (react_1.default.createElement(notistack_1.SnackbarContent, { ref: ref },
        react_1.default.createElement(Card_1.default, { sx: root },
            react_1.default.createElement(Header_1.default, { title: title, subtitle: subtitle || content, variant: notification.variant }),
            react_1.default.createElement(Content_1.default, null, subtitle ? content : null),
            react_1.default.createElement(Actions_1.default, { id: notification === null || notification === void 0 ? void 0 : notification.id, action: notification.action, temporary: temporary }),
            react_1.default.createElement(Footer_1.default, { sx: footer, timeStamp: !temporary && notification.timeStamp || undefined, httpDetails: notification.httpDetails }))));
});
exports.default = Card;
