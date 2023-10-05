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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.save = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const axios_1 = __importDefault(require("axios"));
const path_1 = require("path");
const Config = __importStar(require("./Config"));
const JFS = __importStar(require("../../JFS"));
const Text = __importStar(require("../../Text"));
const save = (path, description) => fs_extra_1.default.writeFile((0, path_1.resolve)(path, 'src', 'API', 'JSC', 'Description.json'), JSON.stringify(description, null, 17));
exports.save = save;
const generate = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const remote = {
        host: (yield JFS.Config.get(path)).JscClient.Host,
        path: '/openapi/description',
        configuration: (yield Config.read(path)).remote,
    };
    const url = `${remote.host}${remote.path}`;
    try {
        return axios_1.default.get((['http', 'https'].some(protocol => Text.Prefix.match(url, protocol))
            ? url
            : `http://${url}`), {
            params: {
                // filter: 'controllers:' + Object.keys(remote.configuration).join(','),
                filter: 'services:WebProxy',
                XDEBUG_SESSION_START: '1'
            }
        }).then(response => {
            console.log({ response });
            return response;
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.generate = generate;
//# sourceMappingURL=Description.js.map