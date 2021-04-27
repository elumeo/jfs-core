import { useSelector } from 'react-redux';

type Selector<S, R> = (state: S) => R;

const createUseSelector = <S>() => (
  <R>(selector: Selector<S, R>) => useSelector<S, R>(selector)
);

export default createUseSelector;