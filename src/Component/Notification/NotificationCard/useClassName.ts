import { INotification } from 'Types/Notification';

const useClassName = ({ error, isSuccess, isWarning, isError, onClick, onClickDispatch }: {
  error?: INotification['error'];
  isSuccess?: INotification['isSuccess'];
  isWarning?: INotification['isWarning'];
  isError?: INotification['isError'];
  onClick?: INotification['onClick'];
  onClickDispatch?: INotification['onClickDispatch'];
}) => {
  const errorClass = isError || error ? 'error' : '';
  const warningClass = isWarning ? 'warning' : '';
  const successClass = isSuccess ? 'success' : '';
  const clickClass = onClick || onClickDispatch ? 'clickable' : '';
  if ([errorClass, warningClass, successClass].filter(c => !!c).length > 1) {
    throw new Error('isError|error, isWarning and isSuccess cannot be combined');
  }
  return [
    `md-cell`, `md-cell--12`,
    `badges__notifications__notification`,
    successClass, warningClass, errorClass, clickClass
  ].join(' ');
}

export default useClassName;
