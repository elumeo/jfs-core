import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import TableRowLoadingBase from 'Component/Table/TableRow/TableRowLoadingBase';

type StylePropsType = { theme: typeof Definition };

const TableRowLoading = styled<typeof TableRowLoadingBase>(TableRowLoadingBase)`
  text-align: center;
  margin-top: ${(props: StylePropsType) => props.theme.spacing(2) + 'px'};
`;

export default TableRowLoading;
