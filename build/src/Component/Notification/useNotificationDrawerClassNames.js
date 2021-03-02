import { useSelector } from "../../../Types/Redux";
const usePinnedClassName = () => {
    const notificationDrawerPinned = useSelector(state => state.Core.Notification.notificationDrawerPinned);
    return (notificationDrawerPinned
        ? 'notification-drawer--pinned'
        : '');
};
const useOverlayClassName = () => {
    const notificationDrawerPinned = useSelector(state => state.Core.Notification.notificationDrawerPinned);
    return (notificationDrawerPinned
        ? 'md-overlay--hidden'
        : '');
};
const useClassNames = () => ({
    pinnedClassName: usePinnedClassName(),
    overlayClassName: useOverlayClassName()
});
export default useClassNames;
//# sourceMappingURL=useNotificationDrawerClassNames.js.map