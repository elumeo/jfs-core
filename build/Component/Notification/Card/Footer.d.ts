import React from 'react';
import { BoxProps } from '@mui/material';
import { Notification } from 'Types/Notification';
declare type Props = Pick<BoxProps, 'sx'> & Pick<Notification, 'timeStamp' | 'httpDetails'>;
declare const Footer: React.FC<Props>;
export default Footer;
