import * as Type from 'Library/JFS/Translations/Type';

const columns = ['de', 'en', 'it']

export const script = (js: string) => (
  `<script type="application/javascript">${js}</script>`
);

export const style = (css: string) => (
  `<style>${css}</style>`
);

export const td = (value: string, pivot: boolean) => (
  `<td class=\\"${pivot ? 'key-cell' : 'value-cell'}\\">${value}</td>`
);

export const tr = (row: Type.Table.Row, pivot: boolean) => (
  [
    `<tr class=\\"${pivot ? 'header-row' : 'value-row'}\\">`,
    ...['key', ...columns]
      .map((key, index) => td(row[key], !index)),
    '</tr>'
  ].join('')
)

export const table = (rows: Type.Table.Row[]) => [
  `<table>`,
  ...rows.map((row, index) => tr(row, !index)),
  `</table>`
].join('');