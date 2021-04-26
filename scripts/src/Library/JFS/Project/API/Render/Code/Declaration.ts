import * as Expression from './Expression';
import * as Type from './Type';

export const constant = (variable: Type.Variable) => (
  `const ${
    variable.value
      ? Expression.assignment({
        name: variable.name,
        value: variable.value
      })
      : name
  };`
);

export const mutable = (variable: Type.Variable) => (
  `let ${
    variable.value
      ? Expression.assignment({
        name: variable.name,
        value: variable.value
      })
      : name
  };`
);