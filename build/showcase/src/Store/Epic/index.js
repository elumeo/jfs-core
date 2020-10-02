import combineEpics from '../../../../Setup/Hooks';
import { parallelAsyncLoopExampleRequestActionEpic } from './parallelAsyncLoopExampleEpic';
import { Jsc2JfsPingUpdateExampleEpic, Jsc2JfsPingLeaveExampleEpic } from './Jsc2JfsPingExampleEpic';
import { currentGameLeaveEpic, currentGameUpdateEpic } from './currentGameEpic';
import { Jfs2JfsPingLeaveExampleEpic, Jfs2JfsPingUpdateExampleEpic } from './Jfs2JfsPingExampleEpic';
import HelloWorldEpic from 'jfc-hello-world/build/Store/Epic';
export default combineEpics(parallelAsyncLoopExampleRequestActionEpic, Jsc2JfsPingUpdateExampleEpic, Jsc2JfsPingLeaveExampleEpic, Jfs2JfsPingUpdateExampleEpic, Jfs2JfsPingLeaveExampleEpic, currentGameUpdateEpic, currentGameLeaveEpic, HelloWorldEpic);
//# sourceMappingURL=index.js.map