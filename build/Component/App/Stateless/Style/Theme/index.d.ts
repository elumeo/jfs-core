import React from 'react';
import { StylesProviderProps } from '@material-ui/styles/StylesProvider/StylesProvider';
export type Props = {
    children: StylesProviderProps['children'];
};
declare const Theme: ({ children }: Props) => React.JSX.Element;
export default Theme;
