import { JavaScript } from './Types';
import Text from '../Text';

class JavaScript {

  static indentation: JavaScript.Static.Indentation = (
    size: number = 0
  ) => Array(size).fill(' ').join('');

  static braces: JavaScript.Static.Braces = ({
    lines,
    indentation
  }) => Text.lines(
    `{`,
    [
      JavaScript.indentation(indentation),
      Text.lines(...lines)
    ].join(''),
    `}`
  );

  static variable: JavaScript.Static.Variable = ({ constant, value, name }) => (
    `${
      constant === false
        ? 'let'
        : 'const'
      } ${
        value
          ? JavaScript.assignment({ name, value })
          : name
      };`
  );

  static equal: JavaScript.Static.Equal = (first, second) => (
    `${first} === ${second}`
  );

  static and: JavaScript.Static.And = (first, second) => (
    `${first} && ${second}`
  );

  static or: JavaScript.Static.Or = (first, second) => `${first} || ${second}`;

  static condition: JavaScript.Static.Condition = ({
    condition, match, mismatch
  }) => (
    `if (${condition}) ${JavaScript.braces({
      indentation: 2,
      lines: match
    })}
    ${
      mismatch && mismatch.length
        ? `else ${JavaScript.braces({
            indentation: 2,
            lines: mismatch
          })}`
        : ''
    }`
  );

  static return: JavaScript.Static.Return = what => `return ${what || ''};`;

  static object: JavaScript.Static.Object = ({ properties }) => (
    `{ ${properties.map(({ name, value }) => `${name}: ${value}`).join(',\n')} }`
  );

  static assignment: JavaScript.Static.Assignment = ({
    name, value
  }) => `${name} = ${value}`;

  static parameter: JavaScript.Static.Parameter = ({
    name, defaultValue
  }) => (
    defaultValue
      ? JavaScript.assignment({
        name,
        value: defaultValue
      })
      : name
  );

  static parameters: JavaScript.Static.Parameters = (
    parameters,
    mapParameter = JavaScript.parameter
  ) => parameters.map(mapParameter).join(', ');

  static function: JavaScript.Static.Function = ({
    parameters,
    fatArrow,
    body,
    mapParameters
  }) => {
    const mappedValue: string = (
      Array.isArray(body)
        ? null
        : body
    );
    const lines: string[] = (
      Array.isArray(body)
        ? body
        : [body]
    );

    const parameterMapper = mapParameters || JavaScript.parameters;

    if (fatArrow === false) {
      return (
        `function(${parameterMapper(parameters)}) ${
          JavaScript.braces({ lines, indentation: 2 })
        }`
      );
    }
    else if (fatArrow === true || fatArrow === undefined) {
      return (
        `(${parameterMapper(parameters)}) => ${
          JavaScript.braces({ lines, indentation: 2 })
        }`
      );
    }
    else if (fatArrow && fatArrow.shortSyntax) {
      return `(${parameterMapper(parameters)}) => ${mappedValue}`;
    }
  }
}

export default JavaScript;
