import { useDispatch } from "react-redux";
import * as Action from '../Action';
const useActions = () => {
    const dispatch = useDispatch();
    return Object.keys(Action).reduce((previous, key) => {
        const action = Action[key];
        return (Object.assign(Object.assign({}, previous), { [key]: (...parameters) => dispatch(action.apply(null, parameters)) }));
    }, {});
};
export default useActions;
//# sourceMappingURL=useActions.js.map