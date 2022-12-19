import * as React from 'react';
import { BoxProps } from '@material-ui/core/Box';
import { Notification } from '../../../Types/Notification';
type Props = Pick<BoxProps, 'className'> & Pick<Notification, 'timeStamp' | 'httpDetails'>;
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
