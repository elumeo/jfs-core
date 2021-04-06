import React from 'react';
export declare type Props = {
    id: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    content: React.ReactNode;
    actions: React.ReactNode;
    translate?: boolean;
};
declare const DefaultNotificationCard: React.FC<Props>;
export default DefaultNotificationCard;
