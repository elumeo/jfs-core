import { ListProps } from '@mui/material/List';
type DrawerProps = {
    children: ListProps['children'];
};
declare const Drawer: ({ children }: DrawerProps) => JSX.Element;
export default Drawer;
