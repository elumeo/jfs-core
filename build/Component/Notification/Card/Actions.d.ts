import * as React from 'react';
import { Props as CardProps } from './';
import { Notification } from 'Types/Notification';
declare type Props = Pick<CardProps, 'temporary'> & Pick<Notification, 'action' | 'id'>;
declare const Actions: React.FC<Props>;
export default Actions;
