import { useSelector } from "Types/Redux";

const useLoginError = () => {
  const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
  const isCheckingSession = useSelector(state => state.Core.Session.isCheckingSession);

  return (
    (isAuthorized !== null || isAuthorized !== true) &&
    !isCheckingSession
  );
};

export default useLoginError;
