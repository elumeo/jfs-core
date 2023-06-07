import * as React from 'react';
import { Notification } from 'Types/Notification';
declare type Props = Pick<Notification, 'title' | 'subtitle' | 'variant'>;
declare const Header: React.FC<Props>;
export default Header;
