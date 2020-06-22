import { createReducer } from 'typesafe-actions';
import { disableSplitViewAction, enableSplitViewAction } from 'Action/SplitViewAction';

namespace SplitView {
  export type State = {
    splitViewEnabled: boolean;
  }
}

const initialState: SplitView.State = {
  splitViewEnabled: false
};

const SplitView = createReducer<SplitView.State>(initialState)
  .handleAction(enableSplitViewAction, (state): SplitView.State => (
    {...state, splitViewEnabled: true}
  ))
  .handleAction(disableSplitViewAction, (state): SplitView.State => (
    {...state, splitViewEnabled: false}
  ));

export default SplitView;
