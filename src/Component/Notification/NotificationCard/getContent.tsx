import React from 'react';
import { INotificationContent } from 'Types/Notification';
import Format from 'Utilities/Format';
import ErrorContent, { errorText } from 'Component/Snackbar/ErrorContent';
import CardText from 'react-md/lib/Cards/CardText';
import { timeToRead as _timeToRead } from 'Component/Snackbar/TimeToRead';

const getContent = (notification: INotificationContent) => {
  const { message, translationId, translationValues, error } = notification;
  const { formatMessage } = Format.Translations;
  if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
    throw new Error(
      `Either 'message', 'translationId' or 'error' must be specified.`
    );
  }
  let content = null;
  let words = '';
  if (message) {
    words = (
      typeof message == 'object'
        ? message.join(' ')
        : message
    )
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
  if (translationId) {
    words = typeof translationId == 'object'
      ? (
        translationId
          .map(tId => formatMessage({ id: tId }, translationValues))
          .join(' ')
      )
      : formatMessage({ id: translationId }, translationValues);
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
    const { body, head } = errorText(error);
    words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
    content = <ErrorContent contentError={error}/>
  }
  return {
    words,
    content: (
      <CardText className='md-text--inherit'>
        {content}
      </CardText>
    ),
    timeToRead: _timeToRead(words)
  };
};

export default getContent;
