import { SnackbarAction, useSnackbar, VariantType, OptionsObject } from 'notistack';
import React from 'react';
export declare type Notification = {
    id?: string;
    group?: string;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    content?: React.ReactNode;
    variant: VariantType;
    action?: (snackbar: ReturnType<typeof useSnackbar>, id: string, temporary: boolean) => SnackbarAction;
    notistackOptions?: OptionsObject;
    isTranslationId?: boolean;
    httpDetails?: React.ReactNode;
    timeStamp?: Date;
};
export declare type NotificationPosition = 'topRight' | 'bottomRight';
