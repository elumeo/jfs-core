import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import TableCellRootBase, { TableCellRootBaseProps } from 'Component/Table/TableCell/TableCellRootBase';

type StylePropsType = { theme: typeof Definition } & TableCellRootBaseProps;

const TableCellRoot = styled<typeof TableCellRootBase>(TableCellRootBase)`
  height: ${({ rowHeight = '100%'}: StylePropsType) => rowHeight};
`;

export default TableCellRoot;
