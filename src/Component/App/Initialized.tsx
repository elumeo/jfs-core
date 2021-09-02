import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import * as Notification from 'Component/Notification';
import { SnackbarProvider } from 'notistack';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  variantSuccess: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.getContrastText(theme.palette.success.main),
  },
  variantError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
  },
  variantWarning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.getContrastText(theme.palette.warning.main),
  },
  variantInfo: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.getContrastText(theme.palette.info.main),
  }
}));

const Initialized: React.FC<{
  translations: Record<string, Record<string, string>>;
  language: string;
  children: React.ReactNode;
}> = ({ translations, language, children }) => {
  const classes = useStyles();
  return <IntlProvider locale={language} messages={translations[language]}>
    <>
      <SnackbarProvider
        classes={{
          variantSuccess: classes.variantSuccess,
          variantError: classes.variantError,
          variantWarning: classes.variantWarning,
          variantInfo: classes.variantInfo,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        maxSnack={5}
        domRoot={document.getElementById('overlay')}>
        <Notification.Notistack />
        {children}
      </SnackbarProvider>
    </>
  </IntlProvider>
};

export default memo(Initialized);
