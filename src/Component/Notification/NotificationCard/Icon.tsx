import React from 'react';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import { INotification } from 'Types/Notification';
import { timeToRead as _timeToRead } from 'Component/Snackbar/TimeToRead';

export type Props = {
  icon?: INotification['icon'];
  error?: INotification['error'];
  isError?: INotification['isError'];
  isSuccess?: INotification['isSuccess'];
};

const Icon: React.FC<Props> = ({ icon, error, isError, isSuccess }) => {
  let iconName = icon;
  iconName = (error || isError) && !icon ? 'error' : iconName;
  iconName = isSuccess && !icon ? 'check' : iconName;
  return (
    iconName
      ? (
        <FontIcon className='icon md-text--inherit'>
          {iconName}
        </FontIcon>
      )
      : null
  );
};

export default Icon;
