"use strict";
// tslint:disable
/**
 * OpenApi Juwelo documentation
 * Specs for microservices: SystemController,SessionController,LoginController,UserController,WebSocketController,DebugNotificationController
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: development@juwelo.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionControllerApi = void 0;
var runtime_1 = require("../runtime");
/**
 * no description
 */
var SessionControllerApi = /** @class */ (function (_super) {
    __extends(SessionControllerApi, _super);
    function SessionControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SessionControllerApi.prototype.getCurrentSession = function (opts) {
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/session',
            method: 'GET',
            headers: headers,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    SessionControllerApi.prototype.getCurrentSessionFrontend = function (_a, opts) {
        var appName = _a.appName;
        (0, runtime_1.throwIfNullOrUndefined)(appName, 'appName', 'getCurrentSessionFrontend');
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/session/{appName}'.replace('{appName}', (0, runtime_1.encodeURI)(appName)),
            method: 'GET',
            headers: headers,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    SessionControllerApi.prototype.logout = function (_a, opts) {
        var sessionDTO = _a.sessionDTO;
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/session',
            method: 'DELETE',
            headers: headers,
            body: sessionDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    return SessionControllerApi;
}(runtime_1.BaseAPI));
exports.SessionControllerApi = SessionControllerApi;
