import { combineReducers } from 'redux';
import Core from './Core';
import { connectRouter } from 'connected-react-router';
const Global = (history) => combineReducers({
    Core,
    router: connectRouter(history),
});
export default Global;
