import { INotification } from "Types/Notification";

const useClassName = ({ error, isSuccess, isError, onClick }: {
  error?: INotification['error'];
  isSuccess?: INotification['isSuccess'];
  isError?: INotification['isError'];
  onClick?: INotification['onClick'];
}) => {
  const errorClass = isError || error ? 'error' : '';
  const successClass = isSuccess ? 'success' : '';
  const clickClass = onClick ? 'clickable' : '';
  if (errorClass.length && successClass.length) {
    throw new Error('isError|error and isSuccess cannot be combined');
  }
  return [
    `md-cell`, `md-cell--12`,
    `badges__notifications__notification`,
    successClass, errorClass, clickClass
  ].join(' ');
}

export default useClassName;
