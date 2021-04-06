import useLoginRobot from "./useLoginRobot";
import { useSelector } from "../../../Types/Redux";
import * as Session from '../../../Store/Selector/Core/Session';
const useLoginDialogIsOpen = () => {
    const robot = useLoginRobot();
    const isAuthorized = useSelector(Session.getIsAuthorizedSelector);
    const isCheckingSession = useSelector(Session.getIsCheckingSessionSelector);
    const routeType = useSelector(state => state.Core.Router.routeType);
    return (routeType === 'authorized' && !isAuthorized &&
        !robot.available &&
        !isCheckingSession);
};
export default useLoginDialogIsOpen;
//# sourceMappingURL=useLoginDialogIsOpen.js.map