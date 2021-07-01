import * as Block from './Block';
import * as Type from './Type';

export const equal = (first: string, second: string) => `${first} === ${second}`;

export const and = (first: string, second: string) => `${first} && ${second}`;

export const or = (first: string, second: string) => `${first} || ${second}`;

export const assignment = (assignment: Type.Assignment) => (
  `${assignment.name} = ${assignment.value}`
);

export const object = ({ properties }: Type.Object) => (
  `{ ${properties.map(({ name, value }) => `${name}: ${value}`).join(',\n')} }`
);

const _function = (_function: Type.Function) => { 

  const lines: string[] = (
    Array.isArray(_function.body)
      ? _function.body
      : [_function.body]
  );

  if (_function.arrow === true || _function.arrow === undefined) {
    return (
      `(${_function.parameters.join(', ')}) => ${
        Block.braces({ lines, indentation: 2 })
      }`
    );
  }
  else if (_function.arrow && typeof _function.body === 'string') {
    return `(${_function.parameters.join(', ')}) => ${_function.body}`;
  }
  else if (_function.arrow === false) {
    return (
      `function(${_function.parameters.join(', ')}) ${
        Block.braces({ lines, indentation: 2 })
      }`
    );
  }
}

export { _function as function };