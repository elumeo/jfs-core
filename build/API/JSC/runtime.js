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
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwIfNullOrUndefined = exports.encodeURI = exports.COLLECTION_FORMATS = exports.RequiredError = exports.BaseAPI = exports.Configuration = exports.BASE_PATH = void 0;
var rxjs_1 = require("rxjs");
var ajax_1 = require("rxjs/ajax");
var operators_1 = require("rxjs/operators");
var servers_1 = require("./servers");
exports.BASE_PATH = servers_1.servers[0].getUrl();
var Configuration = /** @class */ (function () {
    function Configuration(configuration) {
        if (configuration === void 0) { configuration = {}; }
        this.configuration = configuration;
    }
    Object.defineProperty(Configuration.prototype, "basePath", {
        get: function () {
            var _a;
            return (_a = this.configuration.basePath) !== null && _a !== void 0 ? _a : exports.BASE_PATH;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "middleware", {
        get: function () {
            var _a;
            return (_a = this.configuration.middleware) !== null && _a !== void 0 ? _a : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "username", {
        get: function () {
            return this.configuration.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "password", {
        get: function () {
            return this.configuration.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "apiKey", {
        get: function () {
            var apiKey = this.configuration.apiKey;
            return apiKey ? (typeof apiKey === 'string' ? function () { return apiKey; } : apiKey) : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "accessToken", {
        get: function () {
            var accessToken = this.configuration.accessToken;
            return accessToken ? (typeof accessToken === 'string' ? function () { return accessToken; } : accessToken) : undefined;
        },
        enumerable: false,
        configurable: true
    });
    return Configuration;
}());
exports.Configuration = Configuration;
/**
 * This is the base class for all generated API classes.
 */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(configuration) {
        if (configuration === void 0) { configuration = new Configuration(); }
        var _this = this;
        this.configuration = configuration;
        this.middleware = [];
        this.withMiddleware = function (middlewares) {
            var next = _this.clone();
            next.middleware = next.middleware.concat(middlewares);
            return next;
        };
        this.withPreMiddleware = function (preMiddlewares) {
            return _this.withMiddleware(preMiddlewares.map(function (pre) { return ({ pre: pre }); }));
        };
        this.withPostMiddleware = function (postMiddlewares) {
            return _this.withMiddleware(postMiddlewares.map(function (post) { return ({ post: post }); }));
        };
        this.createRequestArgs = function (_a) {
            var baseUrl = _a.url, query = _a.query, method = _a.method, headers = _a.headers, body = _a.body, responseType = _a.responseType;
            // only add the queryString to the URL if there are query parameters.
            // this is done to avoid urls ending with a '?' character which buggy webservers
            // do not handle correctly sometimes.
            var url = "".concat(_this.configuration.basePath).concat(baseUrl).concat(query && Object.keys(query).length ? "?".concat(queryString(query)) : '');
            return {
                url: url,
                method: method,
                headers: headers,
                body: body instanceof FormData ? body : JSON.stringify(body),
                responseType: responseType !== null && responseType !== void 0 ? responseType : 'json',
            };
        };
        this.rxjsRequest = function (params) {
            return (0, rxjs_1.of)(params).pipe((0, operators_1.map)(function (request) {
                _this.middleware.filter(function (item) { return item.pre; }).forEach(function (mw) { return (request = mw.pre(request)); });
                return request;
            }), (0, operators_1.concatMap)(function (args) {
                return (0, ajax_1.ajax)(args).pipe((0, operators_1.map)(function (response) {
                    _this.middleware.filter(function (item) { return item.post; }).forEach(function (mw) { return (response = mw.post(response)); });
                    return response;
                }));
            }));
        };
        /**
         * Create a shallow clone of `this` by constructing a new instance
         * and then shallow cloning data members.
         */
        this.clone = function () {
            return Object.assign(Object.create(Object.getPrototypeOf(_this)), _this);
        };
        this.middleware = configuration.middleware;
    }
    BaseAPI.prototype.request = function (requestOpts, responseOpts) {
        return this.rxjsRequest(this.createRequestArgs(requestOpts)).pipe((0, operators_1.map)(function (res) {
            var status = res.status, response = res.response;
            if (status >= 200 && status < 300) {
                return (responseOpts === null || responseOpts === void 0 ? void 0 : responseOpts.response) === 'raw' ? res : response;
            }
            throw res;
        }));
    };
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
/**
 * @deprecated
 * export for not being a breaking change
 */
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'RequiredError';
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
exports.COLLECTION_FORMATS = {
    csv: ',',
    ssv: ' ',
    tsv: '\t',
    pipes: '|',
};
var encodeURI = function (value) { return encodeURIComponent("".concat(value)); };
exports.encodeURI = encodeURI;
var queryString = function (params) { return Object.entries(params)
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    return value instanceof Array
        ? value.map(function (val) { return "".concat((0, exports.encodeURI)(key), "=").concat((0, exports.encodeURI)(val)); }).join('&')
        : "".concat((0, exports.encodeURI)(key), "=").concat((0, exports.encodeURI)(value));
})
    .join('&'); };
var throwIfNullOrUndefined = function (value, paramName, nickname) {
    if (value == null) {
        throw new Error("Parameter \"".concat(paramName, "\" was null or undefined when calling \"").concat(nickname, "\"."));
    }
};
exports.throwIfNullOrUndefined = throwIfNullOrUndefined;
