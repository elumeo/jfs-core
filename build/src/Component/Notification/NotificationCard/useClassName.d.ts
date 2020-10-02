import { INotification } from "../../../../Types/Notification";
declare const useClassName: ({ error, isSuccess, isError, onClick }: {
    error?: INotification['error'];
    isSuccess?: INotification['isSuccess'];
    isError?: INotification['isError'];
    onClick?: INotification['onClick'];
}) => string;
export default useClassName;
