import { INotification } from '../../../Types/Notification';
declare const useClassName: ({ error, isSuccess, isWarning, isError, onClick, onClickDispatch }: {
    error?: INotification['error'];
    isSuccess?: INotification['isSuccess'];
    isWarning?: INotification['isWarning'];
    isError?: INotification['isError'];
    onClick?: INotification['onClick'];
    onClickDispatch?: INotification['onClickDispatch'];
}) => string;
export default useClassName;
