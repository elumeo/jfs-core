import { createCombineEpics, IAppHooks } from 'Core/Store/Epic';
import { EMPTY } from 'rxjs';

const hooks: IAppHooks = {
  beforeLogoutHook: (_action, _store) => {
    return EMPTY;
  },
  afterLogoutHook: () => {
    return EMPTY;
  }
}

export default createCombineEpics(hooks);
