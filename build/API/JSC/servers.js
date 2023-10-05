"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servers = exports.ServerConfiguration = void 0;
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
var ServerConfiguration = /** @class */ (function () {
    function ServerConfiguration(url, variableConfiguration, description) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
        this.description = description;
    }
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    ServerConfiguration.prototype.setVariables = function (variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    };
    ServerConfiguration.prototype.getConfiguration = function () {
        return this.variableConfiguration;
    };
    ServerConfiguration.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Constructions the URL this server using the url with variables
     * replaced with their respective values
     */
    ServerConfiguration.prototype.getUrl = function () {
        var replacedUrl = this.url;
        for (var key in this.variableConfiguration) {
            if (this.variableConfiguration.hasOwnProperty(key)) {
                var re = new RegExp("{" + key + "}", "g");
                replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
            }
        }
        return replacedUrl;
    };
    return ServerConfiguration;
}());
exports.ServerConfiguration = ServerConfiguration;
var server1 = new ServerConfiguration("http://api.jsc-app.book", {}, "");
exports.servers = [server1];
