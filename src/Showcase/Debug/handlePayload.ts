import { PayloadAction } from 'typesafe-actions';

export default (action: PayloadAction<string, unknown>) => {
  if (!action?.payload || typeof action.payload !== 'object') { return action?.payload ?? '' }
  return action.payload?.hasOwnProperty('length') ? ` - (${(action.payload as Array<unknown>).length})` : ''
}
