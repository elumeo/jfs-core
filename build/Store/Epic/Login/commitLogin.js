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
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var rxjs_1 = require("rxjs");
var JSC_1 = __importDefault(require("../../../API/JSC"));
var Action = __importStar(require("../../Action"));
var Token = __importStar(require("../../../API/LOCAL_STORAGE/Token"));
var jsencrypt_1 = require("jsencrypt");
function encryptString(plainText, publicKey) {
    return __awaiter(this, void 0, void 0, function () {
        var encrypt, encrypted;
        return __generator(this, function (_a) {
            encrypt = new jsencrypt_1.JSEncrypt();
            encrypt.setPublicKey(publicKey);
            encrypted = encrypt.encrypt(plainText);
            if (encrypted === false) {
                throw new Error('Encryption failed');
            }
            return [2 /*return*/, encrypted];
        });
    });
}
var commitLogin = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.checkLogin)), (0, operators_1.switchMap)(function (action) { return __awaiter(void 0, void 0, void 0, function () {
        var newPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, encryptString(action.payload.password, state$.value.Core.Login.publicKey)];
                case 1:
                    newPassword = _a.sent();
                    return [2 /*return*/, {
                            username: action.payload.username,
                            password: newPassword,
                        }];
            }
        });
    }); }), (0, operators_1.switchMap)(function (action) { return (0, rxjs_1.from)(JSC_1.default.LoginClient.loginFrontend(state$.value.Core.Configuration.config.AppName, {
        username: action.username,
        encryptedPassword: action.password,
    })).pipe((0, operators_1.switchMap)(function (response) {
        Token.setToken(response.data.session.token);
        return [
            Action.authorizeSession({ frontendSessionDTO: response.data }),
            Action.loggedIn(),
        ];
    }), (0, operators_1.catchError)(function (error) {
        var _a, _b, _c;
        var contentTranslationId = 'login.failed';
        if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id) === 'authorizationRequired') {
            contentTranslationId = 'userRights.checkFailed';
        }
        var actionsToReturn = [];
        actionsToReturn.push(Action.loginFailed());
        actionsToReturn.push(Action.addToastAction({
            contentTranslationId: contentTranslationId,
            isError: true,
        }));
        if (((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.status) !== 401) {
            actionsToReturn.push(Action.addErrorNotification(error));
        }
        return actionsToReturn;
    })); }));
};
exports.default = commitLogin;
