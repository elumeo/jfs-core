import { INotificationContent } from "Types/Notification";
import getContent from "./getContent";

const getPlainText = (notification: INotificationContent): string => (
  getContent(notification).words
);

export default getPlainText;
