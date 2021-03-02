import React from 'react';
import { INotificationContent } from 'Types/Notification';
import Format from 'Utilities/Format';
// import ErrorContent, { errorText } from 'Component/Snackbar/ErrorContent';
import CardText from '@material-ui/core/CardContent';
// import { timeToRead as _timeToRead } from 'Component/Snackbar/TimeToRead';
import { useIntl } from 'react-intl';
import timeToRead, { _timeToRead } from './timeToRead';
import getPlainText from './getPlainText';

const _getContent = (notification) =>{
  const { message, translationId, translationValues, error } = notification;
  const {formatMessage} = useIntl();
  let content;
  if (message) {
    
    content = (
      typeof message == 'object'
        ? (
          <ul>
            {message.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        )
        : message
    );
  }
  else if (translationId) {
    content = typeof translationId == 'object'
      ? (
        <ul>
          {translationId.map((tId, i) => (
            <li key={i}>
              {formatMessage({ id: tId }, translationValues)}
            </li>
          ))}
        </ul>
      )
      : formatMessage({ id: translationId }, translationValues);
  }
  if (error) {
    // const { body, head } = errorText(error);
    // words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
    // content = <ErrorContent contentError={error}/>
  }
  return content
}


const getContent = (notification: INotificationContent) => {
  const { message, translationId, translationValues, error } = notification;
  const  {formatMessage}  = useIntl()// ({id}, asd?) => id
  if (!(!!message|| !!translationId || !!error)) {
    throw new Error(
      `Either 'message', 'translationId' or 'error' must be specified.`
    );
  }
  let content = _getContent(notification);
  let words = getPlainText(notification);
  
  return {
    words,
    content: (
      <CardText className='md-text--inherit'>
        {content}
      </CardText>
    ),
    timeToRead: timeToRead(notification)
  };
};

export default getContent;
