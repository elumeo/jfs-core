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

/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {number}
     * @memberof UserDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    login?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    dateOfBirth?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    comment?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserDTO
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    legacyLogin?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    createdBy?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    modifiedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    modifiedBy?: string;
}
