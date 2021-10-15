import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import { TableHeadDefault } from 'Component/Table/TableHead/index';
import { TableHeadDefaultProps } from 'Component/Table/TableHead/TableHeadDefault';

type StylePropsType = { theme: typeof Definition } & TableHeadDefaultProps;

const StyledTableHeadDefault = styled(TableHeadDefault)`
  .MuiTableSortLabel-root {
    &:hover {
      color: ${(props: StylePropsType) => props.theme.palette.secondary.main};
    }
  }

  .MuiTableSortLabel-icon {
    align-self: flex-start;
  }
`;

export default StyledTableHeadDefault;
