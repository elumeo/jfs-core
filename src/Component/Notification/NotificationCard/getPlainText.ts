import { INotificationContent } from "Types/Notification";
import getContent from "./getContent";

const getPlainText = (notification: INotificationContent): string =>{ 
  const { message, translationId, translationValues, error } = notification;
  // const {words} =  getContent(notification)
  let words;
  if (message) {
    words = (
      typeof message == 'object'
        ? message?.join(' ')
        : message
    )
  }
  if (translationId) {
    words = typeof translationId == 'object'
      ? (
        translationId
          // .map(tId => formatMessage({ id: tId }, translationValues))
          ?.join(' ')
      )
      :  translationId//formatMessage({ id: translationId }, translationValues);
  }
  if (error) {
    words = typeof error == 'object'
    ? (
      error
        // .map(tId => formatMessage({ id: tId }, translationValues))
        ?.join(' ')
    )
    :  error
    // const { body, head } = errorText(error);
    // words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
    // content = <ErrorContent contentError={error}/>
  }
  return  words
};

export default getPlainText;
