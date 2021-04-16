import { useDispatch } from "react-redux";

const createUseActions = <T extends {
  [name: string]: Function;
}>(Action: T) => () => {
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

export default createUseActions;
