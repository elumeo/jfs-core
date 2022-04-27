import { combineReducers } from 'redux';
import HelloWorld, { State as HelloWorldState } from '@scharfohnezwiebeln/jfc-hello-world/build/Store/Reducer/Jfc/HelloWorld';

export type State = {
  HelloWorld: HelloWorldState;
};

const Jfc = combineReducers({
  HelloWorld
});

export default Jfc;
