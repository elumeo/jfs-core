import { omit } from 'lodash'

export const Column = {
  id: 'id',
  dessert: 'dessert',
  carbs: 'carbs',
  calories: 'calories',
  fat: 'fat',
  protein: 'protein',
} as const
export type Column = typeof Column[keyof typeof Column]



export type Row = {
  [Column.id]: number
  [Column.dessert]: string
  [Column.calories]: number
  [Column.fat]: number
  [Column.carbs]: number
  [Column.protein]: number
}
export const Columns: Column[] = Object.keys(omit(Column, 'id')) as Column[]

export const sortableColumns = Columns.filter(() => true)

export const widthByColumn: Record<Column, string> = {
  [Column.dessert]: '50%',
  [Column.calories]: '10%',
  [Column.fat]: '10%',
  [Column.carbs]: '10%',
  [Column.protein]: '10%',
  [Column.id]: '0',
}

function createDataBasicTable(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

export const rowsBasicTable = [
  createDataBasicTable('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createDataBasicTable('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createDataBasicTable('Eclair', 262, 16.0, 24, 6.0),
  createDataBasicTable('Cupcake', 305, 3.7, 67, 4.3),
  createDataBasicTable('Gingerbread', 356, 16.0, 49, 3.9),
  createDataBasicTable('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createDataBasicTable('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createDataBasicTable('Eclair', 262, 16.0, 24, 6.0),
  createDataBasicTable('Cupcake', 305, 3.7, 67, 4.3),
  createDataBasicTable('Gingerbread', 356, 16.0, 49, 3.9),
];

type SampleVirtualizedTable = [string, number, number, number, number];

export const sample: SampleVirtualizedTable[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createDataVirtualizedTable(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Row {
  return { id, dessert, calories, fat, carbs, protein };
}

export const rowData = Array.from({ length: 200 },
  (_, k) => createDataVirtualizedTable(k, ...sample[Math.floor(Math.random() * sample.length)])
)

// const rows: Row[] = rowData


