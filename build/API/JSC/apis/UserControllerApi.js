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
exports.UserControllerApi = void 0;
var runtime_1 = require("../runtime");
/**
 * no description
 */
var UserControllerApi = /** @class */ (function (_super) {
    __extends(UserControllerApi, _super);
    function UserControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserControllerApi.prototype.createUser = function (_a, opts) {
        var userDTO = _a.userDTO;
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user',
            method: 'POST',
            headers: headers,
            body: userDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.deleteUser = function (_a, opts) {
        var login = _a.login, userDTO = _a.userDTO;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'deleteUser');
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{login}'.replace('{login}', (0, runtime_1.encodeURI)(login)),
            method: 'DELETE',
            headers: headers,
            body: userDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.deleteUserEntityAttributeAccess = function (_a, opts) {
        var userName = _a.userName, entity = _a.entity, attribute = _a.attribute, entityAttributeAccessDTO = _a.entityAttributeAccessDTO;
        (0, runtime_1.throwIfNullOrUndefined)(userName, 'userName', 'deleteUserEntityAttributeAccess');
        (0, runtime_1.throwIfNullOrUndefined)(entity, 'entity', 'deleteUserEntityAttributeAccess');
        (0, runtime_1.throwIfNullOrUndefined)(attribute, 'attribute', 'deleteUserEntityAttributeAccess');
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{userName}/entityAttributeAccess/{entity}/{attribute}'.replace('{userName}', (0, runtime_1.encodeURI)(userName)).replace('{entity}', (0, runtime_1.encodeURI)(entity)).replace('{attribute}', (0, runtime_1.encodeURI)(attribute)),
            method: 'DELETE',
            headers: headers,
            body: entityAttributeAccessDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.getAllUsers = function (_a, opts) {
        var filter = _a.filter;
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        var query = {};
        if (filter != null) {
            query['filter'] = filter;
        }
        return this.request({
            url: '/users',
            method: 'GET',
            headers: headers,
            query: query,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.getAppProperties = function (_a, opts) {
        var login = _a.login, appName = _a.appName;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'getAppProperties');
        (0, runtime_1.throwIfNullOrUndefined)(appName, 'appName', 'getAppProperties');
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{login}/app/{appName}/properties'.replace('{login}', (0, runtime_1.encodeURI)(login)).replace('{appName}', (0, runtime_1.encodeURI)(appName)),
            method: 'GET',
            headers: headers,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.getGroupsOfUser = function (_a, opts) {
        var login = _a.login;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'getGroupsOfUser');
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{login}/groups'.replace('{login}', (0, runtime_1.encodeURI)(login)),
            method: 'GET',
            headers: headers,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.getUser = function (_a, opts) {
        var login = _a.login;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'getUser');
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{login}'.replace('{login}', (0, runtime_1.encodeURI)(login)),
            method: 'GET',
            headers: headers,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.getUserEntityAttributeAccesses = function (_a, opts) {
        var userName = _a.userName;
        (0, runtime_1.throwIfNullOrUndefined)(userName, 'userName', 'getUserEntityAttributeAccesses');
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{userName}/entityAttributeAccesses'.replace('{userName}', (0, runtime_1.encodeURI)(userName)),
            method: 'GET',
            headers: headers,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.getUserRights = function (_a, opts) {
        var login = _a.login, filter = _a.filter;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'getUserRights');
        var headers = __assign({}, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        var query = {};
        if (filter != null) {
            query['filter'] = filter;
        }
        return this.request({
            url: '/user/{login}/rights'.replace('{login}', (0, runtime_1.encodeURI)(login)),
            method: 'GET',
            headers: headers,
            query: query,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.resetPassword = function (_a, opts) {
        var login = _a.login, passwordResetDTO = _a.passwordResetDTO;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'resetPassword');
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{login}/password'.replace('{login}', (0, runtime_1.encodeURI)(login)),
            method: 'PUT',
            headers: headers,
            body: passwordResetDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.setPassword = function (_a, opts) {
        var userId = _a.userId, credentialsDTO = _a.credentialsDTO;
        (0, runtime_1.throwIfNullOrUndefined)(userId, 'userId', 'setPassword');
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{userId}/password'.replace('{userId}', (0, runtime_1.encodeURI)(userId)),
            method: 'POST',
            headers: headers,
            body: credentialsDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.setUserEntityAttributeAccess = function (_a, opts) {
        var userName = _a.userName, entityAttributeAccessDTO = _a.entityAttributeAccessDTO;
        (0, runtime_1.throwIfNullOrUndefined)(userName, 'userName', 'setUserEntityAttributeAccess');
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{userName}/entityAttributeAccess'.replace('{userName}', (0, runtime_1.encodeURI)(userName)),
            method: 'POST',
            headers: headers,
            body: entityAttributeAccessDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    UserControllerApi.prototype.updateUser = function (_a, opts) {
        var login = _a.login, userDTO = _a.userDTO;
        (0, runtime_1.throwIfNullOrUndefined)(login, 'login', 'updateUser');
        var headers = __assign({ 'Content-Type': 'application/json' }, (this.configuration.apiKey && { 'X-JSC-TOKEN': this.configuration.apiKey('X-JSC-TOKEN') }));
        return this.request({
            url: '/user/{login}'.replace('{login}', (0, runtime_1.encodeURI)(login)),
            method: 'PUT',
            headers: headers,
            body: userDTO,
        }, opts === null || opts === void 0 ? void 0 : opts.responseOpts);
    };
    ;
    return UserControllerApi;
}(runtime_1.BaseAPI));
exports.UserControllerApi = UserControllerApi;
