import useLoginRobot from "./useLoginRobot";
import { useSelector } from "Types/Redux";

const useLoginDialogIsOpen = () => {
  const robot = useLoginRobot();
  const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
  const isCheckingSession = useSelector(state => state.Core.Session.isCheckingSession);
  const routeType = useSelector(state => state.Core.Router.routeType);

  return (
    routeType === 'authorized' && !isAuthorized &&
    !robot.available &&
    !isCheckingSession
  );
};

export default useLoginDialogIsOpen;
