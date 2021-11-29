export type Cell = string;
export type Line = Cell[];
export type Head = Line;
export type Row = Record<string, Cell>;
export type Body = Row[];
export type Table = [Head, Body];