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
/**
 *
 * @export
 * @interface SessionDTO
 */
export interface SessionDTO {
    /**
     *
     * @type {Array<string>}
     * @memberof SessionDTO
     */
    allowedMethods?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    token?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    lastIPAddress?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    lastActivity?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    lastHostName?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    createdBy?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    modifiedAt?: string;
    /**
     *
     * @type {string}
     * @memberof SessionDTO
     */
    modifiedBy?: string;
}
