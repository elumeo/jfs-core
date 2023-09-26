import {omit} from 'lodash'

export const Column = {
  select: 'select',
  id: 'id',
  product: 'product',
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
  [Column.dateTime]: string | Date
}
export const Columns: Column[] = Object.keys(omit(Column, 'id')) as Column[]

export const sortableColumns = Columns.filter(() => true)

export const widthByColumn: Record<Column, string> = {
  [Column.select]: '3%',
  [Column.product]: '25%',
  [Column.dessert]: '10%',
  [Column.calories]: '10%',
  [Column.fat]: '10%',
  [Column.carbs]: '10%',
  [Column.protein]: '10%',
  [Column.id]: '0',
  [Column.dateTime]: '10%',
}

function createDataBasicTable(select: number, name: string, calories: number, fat: number, carbs: number, protein: number, dateTime: Date) {
  return {select, name, calories, fat, carbs, protein, dateTime};
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
  [1, 'Frozen yoghurt', 159, 6.0, 24, 4.0, (new Date()).toISOString()],
  [2, 'Ice cream sandwich', 237, 9.0, 37, 4.3, (new Date()).toISOString()],
  [3, 'Eclair', 262, 16.0, 24, 6.0, (new Date()).toISOString()],
  [4, 'Cupcake', 305, 3.7, 67, 4.3, (new Date()).toISOString()],
  [5, 'Gingerbread', 356, 16.0, 49, 3.9, (new Date()).toISOString()],
];

export const loadRowData = (length: number) => {
  const currentRowData = [];
  for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * sample.length);
    currentRowData.push({
      select: sample.length,
      id: sample.length,
      dessert: sample[randomIndex][1],
      calories: sample[randomIndex][2],
      fat: sample[randomIndex][3],
      carbs: sample[randomIndex][4],
      protein: sample[randomIndex][5],
      dateTime: (new Date()).toISOString(),
    })
  }
  return currentRowData;
}



