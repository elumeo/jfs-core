"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const Config_1 = __importDefault(require("../../../../../JFS/Project/Api/Config"));
const API_1 = __importDefault(require("../API"));
const json_diff_1 = __importDefault(require("json-diff"));
const ansi_colors_1 = require("ansi-colors");
class JSC {
    constructor(path) {
        this.generate = (JFS, options) => this.describe(JFS, (description) => this.check({
            description,
            onComplete: result => {
                if (result === JSC.API_CHECK_OK) {
                    console.log(result);
                }
                else {
                    API_1.default.generate({
                        description,
                        options: {
                            namespace: (options || {}).namespace || 'JSCApi',
                            core: (options || {}).core || false
                        },
                        onComplete: code => {
                            this.saveDescription(description);
                            this.saveCode(API_1.default.format(code));
                        }
                    });
                }
            }
        }));
        this.saveCode = (code, onComplete) => {
            fs_1.writeFile(path_1.resolve(this.path, 'Api', 'index.ts'), code, (error) => {
                if (error) {
                    throw error;
                }
                else if (onComplete) {
                    onComplete();
                }
            });
        };
        this.describe = (JFS, onDescription) => (JFS.config.read(({ JscClient: { Host: host } }) => JFS.JSC.config.read(({ remote }) => API_1.default.describe({
            remote: {
                host: host.replace('https://', ''),
                path: '/client/api/description',
                configuration: remote
            },
            onDescription
        }))));
        this.saveDescription = (description) => {
            fs_1.writeFile(path_1.resolve(this.path, 'Api', 'Description.json'), JSON.stringify(description, null, 2), () => {
            });
        };
        this.check = ({ description, onComplete }) => {
            if (!fs_1.existsSync(path_1.resolve(this.path, 'Api', 'Description.json'))) {
                onComplete('No description found');
            }
            else {
                fs_1.readFile(path_1.resolve(this.path, 'Api', 'Description.json'), 'utf8', (error, data) => {
                    if (error) {
                        throw error;
                    }
                    else {
                        onComplete(json_diff_1.default.diffString(description, JSON.parse(data)) ||
                            JSC.API_CHECK_OK);
                    }
                });
            }
        };
        this.path = path;
        this.config = new Config_1.default(path_1.resolve(path, 'Api', 'config.json'));
    }
}
JSC.API_CHECK_OK = [
    `   ${ansi_colors_1.greenBright('OK')}  `,
    '|',
    `jsc-api-check        `,
    '|',
    'API is up to date'
].join(' ');
JSC.location = (path) => path_1.resolve(path, 'src', 'Jsc');
exports.default = JSC;
//# sourceMappingURL=index.js.map