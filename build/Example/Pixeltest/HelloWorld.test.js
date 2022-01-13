"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Stateless_1 = __importDefault(require("../../Component/App/Stateless"));
var HelloWorld_1 = __importDefault(require("./HelloWorld"));
var de_json_1 = __importDefault(require("../../Setup/Locale/de.json"));
require("@cypress/react");
var react_2 = require("@cypress/react");
describe('Pixels match', function () {
    it('compares snapshots', function () {
        (0, react_2.mount)(react_1.default.createElement(Stateless_1.default, { locale: 'de', messages: de_json_1.default },
            react_1.default.createElement(HelloWorld_1.default, null)));
        cy.viewport(1920, 1080);
        cy.get('body').matchImageSnapshot();
    });
});
