import { Reducer } from 'redux';
export interface ISharedStoreProps {
    [reducer: string]: Reducer;
    epic?: any;
}
declare class SharedStore {
    reducer: any;
    epic: any;
    constructor(props: ISharedStoreProps);
}
export default SharedStore;
