import { createReducer } from 'typesafe-actions';
import { currentGameUpdateAction } from 'Action/currentGameAction';

export interface ICurrentGameState {
  data: string;
}

const initialState: ICurrentGameState = {
  data: null
};

export const currentGameReducer = createReducer(initialState)
  .handleAction(currentGameUpdateAction, (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  })
;
