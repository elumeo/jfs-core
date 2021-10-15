import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import TableCellBase, { TableCellBaseProps } from 'Component/Table/TableCell/TableCellBase';

type StylePropsType = { theme: typeof Definition } & TableCellBaseProps;

const StyledTableCellBase = styled(TableCellBase)`
  height: ${({ rowHeight = '100%'}: StylePropsType) => rowHeight};
`;

export default StyledTableCellBase;
