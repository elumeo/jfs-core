import { OptionsObject, SnackbarAction, useSnackbar, VariantType } from 'notistack';
import React from 'react';
export declare type Notification = {
    id?: string;
    group?: string;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    content?: React.ReactNode;
    variant: VariantType | Severity;
    action?: (snackbar: ReturnType<typeof useSnackbar>, id: string, temporary: boolean) => SnackbarAction;
    notistackOptions?: OptionsObject;
    isTranslationId?: boolean;
    httpDetails?: React.ReactNode;
    timeStamp?: Date;
};
export declare type NotificationPosition = 'topRight' | 'bottomRight';
export declare type Severity = 'error' | 'success' | 'warning' | 'info';
