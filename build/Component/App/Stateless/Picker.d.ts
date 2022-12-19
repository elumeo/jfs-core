/// <reference types="react" />
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
export type Props = {
    children: MuiPickersUtilsProviderProps['children'];
};
declare const Picker: ({ children }: Props) => JSX.Element;
export default Picker;
