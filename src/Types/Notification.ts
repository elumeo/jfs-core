import { SnackbarAction, useSnackbar } from 'notistack';

export type Notification = {
  id: string;
  content: React.ReactNode;
  error?: boolean;
  action?: (
    snackbar: ReturnType<typeof useSnackbar>,
    id: string
  ) => SnackbarAction;
};
