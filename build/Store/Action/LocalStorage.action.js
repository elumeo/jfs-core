"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncLocalStorageToReducer = exports.saveToLocalStorage = void 0;
var typesafe_actions_1 = require("typesafe-actions");
var featureName = 'Core/LocalStorage/';
exports.saveToLocalStorage = (0, typesafe_actions_1.createAction)(featureName + 'SAVE_TO_LOCAL_STORAGE')();
exports.syncLocalStorageToReducer = (0, typesafe_actions_1.createAction)(featureName + 'SYNC_REDUCER')();
