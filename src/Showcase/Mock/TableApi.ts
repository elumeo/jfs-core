import { omit } from 'lodash'

export const Column = {
  select: 'select',
  id: 'id',
  dessert: 'dessert',
  carbs: 'carbs',
  calories: 'calories',
  fat: 'fat',
  protein: 'protein',
  dateTime: 'dateTime',
} as const
export type Column = typeof Column[keyof typeof Column]



export type Row = {
  [Column.select]: number
  [Column.id]: number
  [Column.dessert]: string
  [Column.calories]: number
  [Column.fat]: number
  [Column.carbs]: number
  [Column.protein]: number
  [Column.dateTime]: string|Date
}
export const Columns: Column[] = Object.keys(omit(Column, 'id')) as Column[]

export const sortableColumns = Columns.filter(() => true)

export const widthByColumn: Record<Column, string> = {
  [Column.select]: '3%',
  [Column.dessert]: '35%',
  [Column.calories]: '10%',
  [Column.fat]: '10%',
  [Column.carbs]: '10%',
  [Column.protein]: '10%',
  [Column.id]: '0',
  [Column.dateTime]: '10%',
}

function createDataBasicTable(select: number, name: string, calories: number, fat: number, carbs: number, protein: number, dateTime: Date) {
  return { select, name, calories, fat, carbs, protein, dateTime };
}

export const rowsBasicTable = [
  createDataBasicTable(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0, new Date()),
  createDataBasicTable(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3, new Date()),
  createDataBasicTable(3, 'Eclair', 262, 16.0, 24, 6.0, new Date()),
  createDataBasicTable(4, 'Cupcake', 305, 3.7, 67, 4.3, new Date()),
  createDataBasicTable(5, 'Gingerbread', 356, 16.0, 49, 3.9, new Date()),
  createDataBasicTable(6, 'Frozen yoghurt', 159, 6.0, 24, 4.0, new Date()),
  createDataBasicTable(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3, new Date()),
  createDataBasicTable(8, 'Eclair', 262, 16.0, 24, 6.0, new Date()),
  createDataBasicTable(9, 'Cupcake', 305, 3.7, 67, 4.3, new Date()),
  createDataBasicTable(10, 'Gingerbread', 356, 16.0, 49, 3.9, new Date()),
];

type SampleVirtualizedTable = [number, string, number, number, number, number, string];

export const sample: SampleVirtualizedTable[] = [
  [1, 'Frozen yoghurt', 159, 6.0, 24, 4.0, '2023-03-10T10:00:00+01:00'],
  [2, 'Ice cream sandwich', 237, 9.0, 37, 4.3, '2023-03-10T10:00:00+01:00'],
  [3, 'Eclair', 262, 16.0, 24, 6.0, '2023-03-10T10:00:00+01:00'],
  [4, 'Cupcake', 305, 3.7, 67, 4.3, '2023-03-10T10:00:00+01:00'],
  [5, 'Gingerbread', 356, 16.0, 49, 3.9, '2023-03-10T10:00:00+01:00'],
];

function createDataVirtualizedTable(
  select: number,
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  dateTime: string
): Row {
  return { select, id, dessert, calories, fat, carbs, protein, dateTime };
}

export const rowData = Array.from({ length: 200 },
  (_, k) => createDataVirtualizedTable(k, ...sample[Math.floor(Math.random() * sample.length)])
)



