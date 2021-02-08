import React from 'react';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import { INotification } from 'Types/Notification';

export type Props = {
  icon?: INotification['icon'];
  error?: INotification['error'];
  isError?: INotification['isError'];
  isWarning?: INotification['isWarning'];
  isSuccess?: INotification['isSuccess'];
};

const Icon: React.FC<Props> =
  ({
     icon,
     error,
     isError,
     isWarning,
     isSuccess
   }) => {
    let iconName = icon;
    iconName = (error || isError) && !icon ? 'error' : iconName;
    iconName = isWarning && !icon ? 'warning' : iconName;
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
