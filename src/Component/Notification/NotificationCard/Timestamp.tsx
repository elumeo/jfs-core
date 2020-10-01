import React from 'react';
import { INotification } from 'Types/Notification';
import Format from 'Utilities/Format';
import { timeToRead as _timeToRead } from 'Component/Snackbar/TimeToRead';

export type Props = {
  timestamp: INotification['timestamp']
}

const Timestamp: React.FC<Props> = ({ timestamp }) => {
  const { formatDate, formatTime } = Format;
  const now = new Date();
  const displayDate = now.toDateString() != timestamp.toDateString();
  return (
    <div className='timestamp'>
      {
        displayDate
          ? `${formatDate(timestamp)} `
          : null
      }
      {formatTime(timestamp)}
    </div>
  );
};

export default Timestamp;
