import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import TableHeadDefaultBase, { TableHeadDefaultBaseProps } from 'Component/Table/TableHead/TableHeadDefaultBase';

type StylePropsType = { theme: typeof Definition } & TableHeadDefaultBaseProps;

const TableHeadDefault = styled<typeof TableHeadDefaultBase>(TableHeadDefaultBase)`
  .MuiTableSortLabel-root {
    &:hover {
      color: ${(props: StylePropsType) => props.theme.palette.secondary.main};
    }
  }

  .MuiTableSortLabel-icon {
    align-self: flex-start;
  }
`;

export default TableHeadDefault;
