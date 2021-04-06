import { useSelector } from "../../../Types/Redux";
import * as Session from '../../../Store/Selector/Core/Session';
const useLoginError = () => {
    const isAuthorized = useSelector(Session.getIsAuthorizedSelector);
    const isCheckingSession = useSelector(Session.getIsCheckingSessionSelector);
    return ((isAuthorized !== null || isAuthorized !== true) &&
        !isCheckingSession);
};
export default useLoginError;
//# sourceMappingURL=useLoginError.js.map