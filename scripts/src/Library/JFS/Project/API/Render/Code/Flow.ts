import * as Block from './Block';
import * as Type from './Type';

export const condition = ({ condition, match, mismatch }: Type.Condition) => (
  `if (${condition}) ${Block.braces({
    indentation: 2,
    lines: match
  })}
  ${
    mismatch && mismatch.length
      ? `else ${Block.braces({
          indentation: 2,
          lines: mismatch
        })}`
      : ''
  }`
);