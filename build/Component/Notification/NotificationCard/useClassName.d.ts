import { INotification } from '../../../Types/Notification';
declare const useClassName: ({ error, isSuccess, isWarning, isError, onClick }: {
    error?: INotification['error'];
    isSuccess?: INotification['isSuccess'];
    isWarning?: INotification['isWarning'];
    isError?: INotification['isError'];
    onClick?: INotification['onClick'];
}) => string;
export default useClassName;
