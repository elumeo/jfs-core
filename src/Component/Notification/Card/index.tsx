import React from 'react';
import MUICard from '@mui/material/Card';
import { Notification, Severity } from 'Types/Notification';
import { useIntl } from 'react-intl';
import Content from './Content';
import Header from './Header';
import { SnackbarContent } from 'notistack'
import Actions from './Actions';
import Footer from './Footer';
import definition from 'Component/App/Stateless/Style/Theme/Definition';
import { grey } from '@mui/material/colors';

const _getStyles =
  ({ variant }: { variant: Severity }) => ({
    root: {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '1fr auto',
      gridTemplateRows: 'auto auto',
      maxWidth: definition.spacing(60),
      minHeight: 'fit-content',
      backgroundColor:
        definition.palette?.[variant]?.['main'] || grey[400],
      color: definition.palette?.[variant]?.['contrastText'] || grey[50]
    },
    footer: {
      gridColumnStart: 1,
      gridColumnEnd: 'none',
      textAlign: 'right',

      padding: definition.spacing(0, 2),
      '& > *': {
        margin: definition.spacing(1, 0)
      }
    }
  })

export type Props = {
  notification: Notification;
  temporary: boolean;
};

const Card = React.forwardRef<HTMLDivElement, Props>(({ notification, temporary }, ref) => {
  const { variant, isTranslationId } = notification
  const { formatMessage } = useIntl()
  const { root, footer } = React.useMemo(() => _getStyles({ variant: variant as Severity }), [variant]);

  const title = isTranslationId && notification.title
    ? formatMessage({ id: notification.title as string })
    : notification.title
  const subtitle = isTranslationId && notification.subtitle
    ? formatMessage({ id: notification.subtitle as string })
    : notification.subtitle
  const content = isTranslationId && notification.content
    ? formatMessage({ id: notification.content as string })
    : notification.content

  return (<SnackbarContent ref={ref} >
    <MUICard sx={root}>
      <Header title={title} subtitle={subtitle || content} variant={notification.variant} />
      <Content>{subtitle ? content : null}</Content>
      <Actions id={notification?.id} action={notification.action} temporary={temporary} />
      <Footer sx={footer} timeStamp={!temporary && notification.timeStamp || undefined}
        httpDetails={notification.httpDetails} />
    </MUICard></SnackbarContent>
  );
});

export default Card
