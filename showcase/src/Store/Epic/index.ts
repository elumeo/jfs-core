import { combineEpics } from 'redux-observable';
import Core from '@elumeo/jfs-core/build/Store/Epic';
import HelloWorldEpic from '@scharfohnezwiebeln/jfc-hello-world/build/Store/Epic';
import { parallelAsyncLoopExampleRequestActionEpic } from './parallelAsyncLoopExampleEpic';
import { Jsc2JfsPingUpdateExampleEpic, Jsc2JfsPingLeaveExampleEpic } from './Jsc2JfsPingExampleEpic';
import { currentGameLeaveEpic, currentGameUpdateEpic } from './currentGameEpic';
import { Jfs2JfsPingLeaveExampleEpic, Jfs2JfsPingUpdateExampleEpic } from './Jfs2JfsPingExampleEpic';

export default combineEpics(
  Core,
  HelloWorldEpic,
  parallelAsyncLoopExampleRequestActionEpic,
  Jsc2JfsPingUpdateExampleEpic,
  Jsc2JfsPingLeaveExampleEpic,
  Jfs2JfsPingUpdateExampleEpic,
  Jfs2JfsPingLeaveExampleEpic,
  currentGameUpdateEpic,
  currentGameLeaveEpic,
);
