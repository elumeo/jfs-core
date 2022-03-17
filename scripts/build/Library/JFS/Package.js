"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.register = void 0;
const path_1 = __importDefault(require("path"));
const Package = __importStar(require("../NPM/Package"));
const lodash_1 = __importDefault(require("lodash"));
const combine = (scripts) => (scripts.reduce((all, { name, command }) => (Object.assign(Object.assign({}, all), { [name]: command })), {
    "test": "echo 'running tests is not yet supported'",
    //"test": "cypress run-ct --env COMPARE_IMAGE_SNAPSHOTS=true",
    //"test-interactive": "cypress open-ct --env COMPARE_IMAGE_SNAPSHOTS=true",
    //"test-updateSnapshots": "docker-compose -f docker-compose-test.yml run --rm app rm -rf cypress/snapshots/* && npm test ### https://github.com/jaredpalmer/cypress-image-snapshot/issues/74 ### -> # cypress run-ct --env updateSnapshots=true",
    // "test-docker": "docker-compose -f docker-compose-test.yml run --rm app npm test",
}));
const register = (env, scripts) => __awaiter(void 0, void 0, void 0, function* () {
    const file = path_1.default.resolve(env.root, 'package.json');
    const json = yield Package.json(file);
    const next = { scripts: combine(scripts) };
    yield Package.save(file, lodash_1.default.merge(json, next));
});
exports.register = register;
//# sourceMappingURL=Package.js.map