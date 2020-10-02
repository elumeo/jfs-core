import { createCombineEpics } from '@elumeo/jfs-core/build/Store/Epic';
import { EMPTY } from 'rxjs';
const hooks = {
    beforeLogoutHook: (_action, _store) => {
        return EMPTY;
    },
    afterLogoutHook: () => {
        return EMPTY;
    }
};
export default createCombineEpics(hooks);
//# sourceMappingURL=Hooks.js.map