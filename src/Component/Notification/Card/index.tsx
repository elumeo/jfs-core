import React from 'react';
import MUICard from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { Notification, Severity } from 'Types/Notification';
import { useIntl } from 'react-intl';
import Content from './Content';
import Header from './Header';
import Actions from './Actions';
import Footer from './Footer';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const useStyles = makeStyles<{ variant: Severity }>(props => ({
  root: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto',
    maxWidth: definition.spacing(60),
    minHeight: 'fit-content',
    backgroundColor: definition.palette?.[props.variant as keyof typeof definition.palette]?.['main'] || definition.palette['grey']['A400'],
    color: definition.palette?.[props.variant as keyof typeof definition.palette]?.['contrastText'] || definition.palette['grey']['50']
  }
}))

export type Props = {
  notification: Notification;
  temporary: boolean;
};

const Card: React.FC<Props> = ({ notification, temporary }) => {
  const { isTranslationId } = notification
  const { formatMessage } = useIntl()
  const classes = useStyles(notification);

  const title = isTranslationId && notification.title
    ? formatMessage({ id: notification.title as string })
    : notification.title
  const subtitle = isTranslationId && notification.subtitle
    ? formatMessage({ id: notification.subtitle as string })
    : notification.subtitle
  const content = isTranslationId && notification.content
    ? formatMessage({ id: notification.content as string })
    : notification.content

  return (
    <MUICard className={classes.root}>
      <Header title={title} subtitle={subtitle || content} variant={notification.variant} />
      <Content>{subtitle ? content : null}</Content>
      <Actions id={notification?.id} action={notification.action} temporary={temporary} />
      <Footer timeStamp={!temporary && notification.timeStamp || undefined} httpDetails={notification.httpDetails} />
    </MUICard>
  );
};

export default React.memo(Card)
