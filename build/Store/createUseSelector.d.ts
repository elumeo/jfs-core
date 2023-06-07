declare type Selector<S, R> = (state: S) => R;
declare const createUseSelector: <S>() => <R>(selector: Selector<S, R>) => R;
export default createUseSelector;
