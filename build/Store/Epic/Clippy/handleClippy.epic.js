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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../../Action");
var Selector = __importStar(require("../../Selector/Core"));
var rxjs_1 = require("rxjs");
var typesafe_actions_1 = require("typesafe-actions");
var ClippyLoader_service_1 = __importDefault(require("../../../API/CLIPPY/ClippyLoader.service"));
var redux_observable_1 = require("redux-observable");
var agent = {
    instance: null,
    type: null
};
var listenContextMenu = function (action$, state$) {
    return state$.pipe((0, rxjs_1.switchMap)(function () {
        return (0, rxjs_1.fromEvent)(document, 'contextmenu')
            .pipe((0, rxjs_1.filter)(function (e) { return e.target instanceof HTMLElement && e.target.classList.contains('clippy'); }), (0, rxjs_1.tap)(function (e) { return e.preventDefault(); }), (0, rxjs_1.tap)(function (e) { return e.stopImmediatePropagation(); }), (0, rxjs_1.switchMap)(function () { return [(0, Action_1.clippyDestroy)()]; }));
    }));
};
var init = function (_action$, state$) {
    return state$.pipe((0, rxjs_1.filter)(function () { return Selector.ClippyConfig.pickClippyEnabled(state$.value); }), (0, rxjs_1.filter)(function () { return !!Selector.ClippyConfig.pickClippyVariant(state$.value); }), (0, rxjs_1.filter)(function () { return !agent.instance; }), (0, rxjs_1.switchMap)(function () { return [(0, Action_1.clippyInit)(Selector.ClippyConfig.pickClippyVariant(state$.value))]; }));
};
var handleLoader = function (action$, state$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)([Action_1.clippyInit, Action_1.clippySaveAgent])), (0, rxjs_1.map)(function (action) { var _a; return (_a = action.payload) !== null && _a !== void 0 ? _a : Selector.ClippyConfig.pickClippyVariant(state$.value); }), (0, rxjs_1.map)(function (variant) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (((_b = agent === null || agent === void 0 ? void 0 : agent.instance) === null || _b === void 0 ? void 0 : _b.stop) && agent.type !== variant) {
                        return [2 /*return*/, [(0, Action_1.clippyDestroy)()]];
                    }
                    _a = agent;
                    return [4 /*yield*/, (0, ClippyLoader_service_1.default)(variant)];
                case 1:
                    _a.instance = (_c.sent());
                    agent.type = variant;
                    return [2 /*return*/, []];
            }
        });
    }); }), (0, rxjs_1.switchMap)(function () {
        return [(0, Action_1.clippyInitialized)(agent.type)];
    }));
};
var handleSay = function (action$, state$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)(Action_1.clippySay)), (0, rxjs_1.concatMap)(function (_a) {
        var payload = _a.payload, meta = _a.meta;
        if (agent.instance) {
            agent.instance.show(false);
            agent.instance.speak(payload, false);
            return [(0, Action_1.clippyAnimate)(meta !== null && meta !== void 0 ? meta : null)];
        }
        else {
            return [(0, Action_1.clippyInit)(Selector.ClippyConfig.pickClippyVariant(state$.value))];
        }
    }));
};
var handleAnimation = function (action$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)(Action_1.clippyAnimate)), (0, rxjs_1.map)(function (_a) {
        var payload = _a.payload;
        return payload;
    }), (0, rxjs_1.concatMap)(function (animation) {
        if (agent.instance) {
            animation ? agent.instance.play(animation) : agent.instance.animate();
        }
        return [];
    }));
};
var handleDestroy = function (action$, state$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)(Action_1.clippyDestroy)), (0, rxjs_1.map)(function () {
        var _a;
        if ((_a = agent === null || agent === void 0 ? void 0 : agent.instance) === null || _a === void 0 ? void 0 : _a.stop) {
            agent.instance.stopCurrent();
            agent.instance.hide(false, function () { return; });
            agent.instance = null;
            agent.type = null;
        }
        Array.from(document.querySelectorAll('.clippy')).map(function (el) { return el.remove(); });
    }), (0, rxjs_1.switchMap)(function () { return [(0, Action_1.clippyInit)(Selector.ClippyConfig.pickClippyVariant(state$.value))]; }));
};
exports.default = (0, redux_observable_1.combineEpics)(listenContextMenu, init, handleLoader, handleSay, handleDestroy, handleAnimation);
