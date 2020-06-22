import React from 'react';
declare namespace Enhancer {
    type Props<State, Actions> = {
        state?: State;
        children: (childrenProps: {
            actions: Actions;
            state: State;
        }) => JSX.Element;
    } & Partial<Actions>;
}
declare const Enhancer: <GlobalState, State, Actions>({ actions, mapToState, children }: React.PropsWithChildren<{
    actions: Actions;
    mapToState: (globalState: GlobalState) => State;
    children: (childrenProps: {
        actions: Actions;
        state: State;
    }) => JSX.Element;
}>) => JSX.Element;
export default Enhancer;
