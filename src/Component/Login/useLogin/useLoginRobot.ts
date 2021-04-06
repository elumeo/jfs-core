import { useSelector } from 'Types/Redux';

const useLoginRobot = () => {
  const allowRobotLogin = useSelector(state => state.Core.App.allowRobotLogin);
  const failedLogins = useSelector(state => state.Core.Login.failedLogins);
  const config = useSelector(state => state.Core.Configuration.config);

  return {
    available: (
      config?.RobotUsername &&
      config?.RobotPassword &&
      allowRobotLogin &&
      !failedLogins
    )
  };
};

export default useLoginRobot;
