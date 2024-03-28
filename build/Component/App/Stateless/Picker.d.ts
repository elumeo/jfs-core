import React from 'react';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
export type Props = {
    children: MuiPickersUtilsProviderProps['children'];
};
declare const Picker: ({ children }: Props) => React.JSX.Element;
export default Picker;
