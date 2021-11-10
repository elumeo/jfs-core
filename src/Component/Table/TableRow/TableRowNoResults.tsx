import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import TableRowNoResultsBase from 'Component/Table/TableRow/TableRowNoResultsBase';
import { memo } from 'react';

type StylePropsType = { theme: typeof Definition };

const TableRowNoResults = styled<typeof TableRowNoResultsBase>(TableRowNoResultsBase)`
  text-align: center;
  margin-top: ${(props: StylePropsType) => props.theme.spacing(2) + 'px'};
`;

export default memo(TableRowNoResults);
