import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import styled from 'styled-components';
import TableCellDefault, { TableCellDefaultProps } from 'Component/Table/TableCell/TableCellDefault';

type StylePropsType = { theme: typeof Definition } & TableCellDefaultProps;

const StyledTableCellDefault = styled(TableCellDefault)`
  .virtualized-table {
    &__content-ellipses {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &__content-ellipses-lines {
      overflow: hidden;
      white-space: normal;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${(props: StylePropsType) => props.contentEllipseLines ?? 4};
      display: -webkit-box;
    }
  }
`;

export default StyledTableCellDefault;
