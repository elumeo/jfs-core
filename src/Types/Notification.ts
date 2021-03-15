import { SnackbarAction, useSnackbar, VariantType } from 'notistack';
import React from 'react';

export type Notification = {
  id: string;
  title?: React.ReactNode,
   subtitle?: React.ReactNode,
  content?: React.ReactNode;
  variant: VariantType;
  action?: (
    snackbar: ReturnType<typeof useSnackbar>,
    id: string
  ) => SnackbarAction;
};
