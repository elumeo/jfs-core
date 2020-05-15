import React from 'react';
import { connect } from 'react-redux';

namespace Provider {
  export type Props<State, Actions> = {
    state?: State;
    children: (props: {
      state: State;
      actions: Actions;
    }) => JSX.Element;
  }

  export const create = <GlobalState, State, Actions>(
    actions: Actions,
    mapToProviderState: (GlobalState) => State
  ): React.FC<Props<State, Actions>> => {
    const Unconnected: React.FC<Props<State, Actions>> = ({
      state,
      children,
      ...actions
    }) => (
      <>
        {children({ actions: actions as Actions, state })}
      </>
    )

    const enhance = connect(
      (state: GlobalState, ownProps: Props<State, Actions>) => ({
        ...ownProps,
        state: mapToProviderState(state)
      }),
      actions as {}
    );

    return enhance(Unconnected) as unknown as React.FC<Props<State, Actions>>;
  };
}

export default Provider;
