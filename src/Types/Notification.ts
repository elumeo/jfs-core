import { SnackbarAction, useSnackbar, VariantType, OptionsObject } from 'notistack';
import React from 'react';

export type Notification = {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  variant: VariantType;
  action?: (
    snackbar: ReturnType<typeof useSnackbar>,
    id: string,
    temporary: boolean
  ) => SnackbarAction;
  notistackOptions?: OptionsObject;
  isTranslationId?: boolean
};
