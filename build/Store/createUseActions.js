"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const createUseActions = <T extends Record<string, unknown>>(
//   Action: T,
// ) => (): typeof Action => {
//   const dispatch = useDispatch();
//   return Object.keys(Action).reduce((previous, key) => {
//     const action = Action[key as keyof typeof Action];
//     return {
//       ...previous,
//       [key as keyof typeof Action]: (...parameters: unknown[]) =>
//         dispatch((action as (...parameters: unknown[]) => void)(...parameters)),
//     };
//   }, {}) as typeof Action;
// };
// export default createUseActions;
