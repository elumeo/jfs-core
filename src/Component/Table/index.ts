export { default as VirtualizedTable } from './VirtualizedTable';

import Cell from './Cell';
import Head from './Head';
import Row from './Row';
import TableBase from './Table';
import Container from './Container';
import VirtualizedTable from './VirtualizedTable';

const Table = {
  Cell,
  Head,
  Row,
  Container,
  Table: TableBase,
  VirtualizedTable,
}

export default Table;
