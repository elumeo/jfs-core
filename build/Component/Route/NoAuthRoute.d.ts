import { IBaseRouteProps } from './BaseRoute';
import { enterUnauthorizedRoute } from '../../Store/Action/RouterAction';
export interface INoAuthRouteProps extends IBaseRouteProps {
    enterUnauthorizedRoute?: typeof enterUnauthorizedRoute;
}
declare const _default: import("react-redux").ComponentClass<INoAuthRouteProps>;
export default _default;
