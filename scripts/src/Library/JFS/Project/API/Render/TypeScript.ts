import * as Type from './Type';
import * as Code from './Code';

export const annotation = ({ type, optional, array }: Type.TypeScript.Annotation) => {
  if (type) {
    return `${optional ? '?' : ''}: ${type}${array ? '[]' : ''}`;
  }
  else {
    return '';
  }
};

export const generics = (...generics: string[]) => (
  generics.length
    ? `<${generics.join(', ')}>`
    : ''
);

export const namespace = (namespace: Type.TypeScript.Namespace) => (
  `namespace ${namespace.name} ${Code.Block.braces({
    lines: [namespace.what],
    indentation: 2
  })}`
);

export const type = (type: Type.TypeScript.Type) => `type ${Code.Expression.assignment(type)}`;

const _interface = (_interface: Type.TypeScript.Interface) => (
  `interface ${_interface.name} ${Code.Block.braces({
    lines: _interface.lines,
    indentation: 2
  })}`
);

const _function = (_function: Type.TypeScript.Function) => {
  const addGenerics = (rendered: string, arrow: boolean | { short: boolean; }) => (
    arrow === false
      ? rendered.replace(
        'function',
        'function' + generics(...(_function.generics || []))
      )
      : generics(...(_function.generics || [])) + rendered
  );

  const addAnnotation = (rendered: string) => (
    rendered.replace(
      ')',
      ')' + annotation({ type: _function.return.type })
    )
  );

  return [addAnnotation, addGenerics].reduce(
    (rendered, mapper) => mapper(rendered, _function.arrow),
    Code.Expression.function({
      parameters: _function.parameters,
      arrow: _function.arrow,
      body: _function.body
    })
  );
}

export { _interface as interface, _function as function };
