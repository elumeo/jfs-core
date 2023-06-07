import { FC } from 'react';
import { DrawerProps } from '@mui/material/Drawer';
import { ListProps } from '@mui/material/List';
declare type Props = Omit<DrawerProps, 'children'> & {
    children: ListProps['children'];
    width?: number;
};
declare const Drawer: FC<Props>;
export default Drawer;
