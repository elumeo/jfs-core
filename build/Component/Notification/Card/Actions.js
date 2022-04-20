"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var styles_1 = require("@material-ui/core/styles");
var notistack_1 = require("notistack");
var Button = __importStar(require("../Button"));
var useStyles = (0, styles_1.makeStyles)(({
    root: {
        gridColumnStart: 2,
        gridRowStart: 1,
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplate: 'auto auto / auto auto',
        alignContent: 'center',
        direction: 'rtl',
        justifyItems: 'start'
    }
}));
var Actions = function (_a) {
    var temporary = _a.temporary, action = _a.action, id = _a.id;
    var classes = useStyles();
    var snackbar = (0, notistack_1.useSnackbar)();
    return React.createElement(CardActions_1.default, { className: classes.root },
        React.createElement(React.Fragment, null,
            !temporary ? React.createElement(Button.Delete, { id: id }) : null,
            action ? action(snackbar, id, temporary) : null));
};
exports.default = React.memo(Actions);
