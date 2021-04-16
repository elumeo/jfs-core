import { useDispatch } from "react-redux";
const createUseActions = (Action) => () => {
    const dispatch = useDispatch();
    return Object.keys(Action).reduce((previous, key) => {
        const action = Action[key];
        return (Object.assign(Object.assign({}, previous), { [key]: (...parameters) => dispatch(action.apply(null, parameters)) }));
    }, {});
};
export default createUseActions;
