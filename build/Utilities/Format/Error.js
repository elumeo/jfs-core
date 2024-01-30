"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
var isAxiosError = function (error) {
    return ['config', 'code', 'request', 'response'].every(function (key) { return key in error; });
};
var isJscError = function (error) {
    var _a;
    return isAxiosError(error)
        && typeof ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === 'object'
        && ['id', 'message'].every(function (key) { return key in error.response.data; });
};
var head = function (error) {
    var _a = error.response, status = _a.status, statusText = _a.statusText;
    var method = error.config.method.toUpperCase();
    var url = error.config.url.substring(error.config.baseURL.length);
    return "(http: ".concat(status, " ").concat(statusText, " // ").concat(method, " ").concat(url, ")");
};
var body = function (error) {
    var data = error.response.data;
    if (isJscError(error)) {
        var id = data.id, message = data.message;
        return "".concat(message, " (").concat(id, ")");
    }
    else {
        return JSON.stringify(data, null, 2);
    }
};
var http = function (error) { return ({
    title: head(error),
    details: body(error),
}); };
var generic = function (error) { return ({
    title: error.name,
    details: error.message + '\n' + error.stack,
}); };
var apply = function (error) { return (isAxiosError(error) ? http(error) : generic(error)); };
exports.apply = apply;
