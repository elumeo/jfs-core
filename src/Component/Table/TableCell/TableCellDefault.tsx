import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import styled from 'styled-components';
import TableCellDefaultBase, { TableCellDefaultBaseProps } from 'Component/Table/TableCell/TableCellDefaultBase';
import { memo } from 'react';

type StylePropsType = { theme: typeof Definition } & TableCellDefaultBaseProps;

const TableCellDefault = styled<typeof TableCellDefaultBase>(TableCellDefaultBase)`
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

export default memo(TableCellDefault);
