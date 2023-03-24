import { StylesProviderProps } from '@material-ui/styles/StylesProvider/StylesProvider';
export type Props = {
    children: StylesProviderProps['children'];
};
declare const Theme: ({ children }: Props) => JSX.Element;
export default Theme;
