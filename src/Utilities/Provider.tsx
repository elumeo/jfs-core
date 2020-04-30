import React from 'react';
import { connect } from 'react-redux';

type ProvidedProps<State, Actions> = {
  actions: Actions;
  state: State;
};

type ProviderProps<State, Actions> = Partial<Actions> & {
  state?: State;
  children: (providedProps: ProvidedProps<State, Actions>) => JSX.Element;
}

type Provider<State, Actions> = React.FC<ProviderProps<State, Actions>>;

type MapToProviderState<State, GlobalState> = (globalState: GlobalState) => State;

export const createProvider = <State, GlobalState, Actions>(
    actions: Actions,
    mapToProviderState: MapToProviderState<State, GlobalState>
  ): Provider<State, Actions> => {
  const Provider = ({
    children,
    state,
    ...actions
  }) => (
    <>
      {children({ state, actions })}
    </>
  );

  const mapStateToProps = (
    state: GlobalState,
    ownProps
  ): ProviderProps<Actions, State> => ({
    ...ownProps,
    state: mapToProviderState(state)
  });

  // @ts-ignore
  const enhance = connect(mapStateToProps, actions);

  return enhance(Provider) as Provider<State, Actions>;
}

export default <State, GlobalState, Actions>({
  actions,
  mapToProviderState
}: {
  actions: Actions,
  mapToProviderState: (globalState: GlobalState) => State
}) => (createProvider<State, GlobalState, Actions>(
  actions,
  mapToProviderState
) as React.FC);
