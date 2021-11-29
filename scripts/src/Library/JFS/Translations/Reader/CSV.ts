import * as Type from './Type';

type Cell = Type.CSV.Cell;
type Line = Type.CSV.Line;
type Row = Type.CSV.Row;
type Head = Type.CSV.Head;
type Body = Type.CSV.Body;
type Table = Type.CSV.Table;

export const column = (body: Body, key: string): Line => (
  body.map(row => row[key])
);

export const parse = (text: string, delimiter = ','): Table => {
  const lines = split(text, delimiter);
  return table(lines[0], lines.slice(1));
};

const table = (head: Line, lines: Line[]): Table => [
  head,
  lines.map(row(head))
];

const split = (text: string, delimiter = ','): Line[] => (
  text
    .split('\n')
    .map(cells(delimiter))
    .filter(row => row.length)
);

const row = (head: string[]) => (cells: string[]): Row => (
  cells.reduce(fill(head), {})
);

const fill = (head: string[]) => (
  (row: Row, value: string, index: number): Row => {
    const key = head[index];
    row[key] = value;
    return row;
  }
);

const cells = (delimiter = ',') => (row: string): Cell[] => (
  row
    .split(delimiter)
    .map(cell)
);

const cell = (text: string): string => (
  text === '' || text === 'undefined'
    ? null
    : text
);