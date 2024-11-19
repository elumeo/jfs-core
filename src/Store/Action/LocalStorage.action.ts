import { State as LocalStorageState } from 'Store/Reducer/Core/LocalStorage.reducer';
import { createAction } from 'typesafe-actions';

const featureName = 'Core/LocalStorage/';

export const saveToLocalStorage = createAction(featureName + 'SAVE_TO_LOCAL_STORAGE')<string, string>();

export const syncLocalStorageToReducer = createAction(featureName + 'SYNC_REDUCER')<Partial<LocalStorageState>>();


