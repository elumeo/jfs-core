import { useSelector } from '../../../../Types/Redux';
import * as Selector from '../../../../Store/Selector';
const useLoginRobot = () => {
    const allowRobotLogin = useSelector(Selector.allowRobotLogin);
    const failedLogins = useSelector(state => state.Core.Login.failedLogins);
    const config = useSelector(state => state.Core.Configuration.config);
    return {
        available: ((config === null || config === void 0 ? void 0 : config.RobotUsername) &&
            (config === null || config === void 0 ? void 0 : config.RobotPassword) &&
            allowRobotLogin &&
            !failedLogins)
    };
};
export default useLoginRobot;
