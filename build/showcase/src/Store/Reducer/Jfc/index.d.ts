import HelloWorld from 'jfc-hello-world/build/Store/Reducer';
declare namespace Jfc {
    type State = {
        HelloWorld: HelloWorld.State;
    };
}
declare const Jfc: import("redux").Reducer<import("redux").CombinedState<{
    HelloWorld: HelloWorld.State;
}>, import("redux").AnyAction>;
export default Jfc;
