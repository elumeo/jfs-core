import React from 'react';
import Style from './Style';
import { Props as PickerProps } from './Picker';
export declare type Props = {
    children: PickerProps['children'];
    locale: string;
    messages: Record<string, string>;
};
declare const Stateless: React.FC<Props> & {
    Style: typeof Style;
};
export default Stateless;
