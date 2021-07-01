import * as Text from 'Library/JFS/API/Render/Text';
import * as Type from './Type';

export const indentation = (size: number = 0) => Array(size).fill(' ').join('');

export const braces = (braces: Type.Braces) => Text.lines(
  `{`,
  [
    indentation(braces.indentation),
    Text.lines(...braces.lines)
  ].join(''),
  `}`
);