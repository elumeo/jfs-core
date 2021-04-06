import { useDispatch } from "react-redux";
import * as Action from 'Store/Action';

const useActions = () => {
  const dispatch = useDispatch();
  return Object.keys(Action).reduce(
    (previous, key) => {
      const action = Action[key as keyof typeof Action];
      return ({
        ...previous,
        [key as keyof typeof Action]: (...parameters) => dispatch(
          (action as Function).apply(null, parameters)
        )
      })
    },
    {}
  ) as typeof Action;
}

export default useActions;
