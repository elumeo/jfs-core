/// <reference types="react" />
import { ListProps } from '@material-ui/core/List';
type DrawerProps = {
    children: ListProps['children'];
};
declare const Drawer: ({ children }: DrawerProps) => JSX.Element;
export default Drawer;
