import { combineReducers } from 'redux';
import HelloWorld from 'jfc-hello-world/build/Store/Reducer';

namespace Jfc {
  export type State = {
    HelloWorld: HelloWorld.State;
  }
}

const Jfc = combineReducers({
  HelloWorld
});

export default Jfc;
