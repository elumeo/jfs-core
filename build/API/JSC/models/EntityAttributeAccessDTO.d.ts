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
 * @interface EntityAttributeAccessDTO
 */
export interface EntityAttributeAccessDTO {
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    entity?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    attribute?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    access?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    createdBy?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    modifiedAt?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAttributeAccessDTO
     */
    modifiedBy?: string;
}
