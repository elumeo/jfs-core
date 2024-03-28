import React from 'react';
import { ListProps } from '@material-ui/core/List';
type DrawerProps = {
    children: ListProps['children'];
};
declare const Drawer: ({ children }: DrawerProps) => React.JSX.Element;
export default Drawer;
