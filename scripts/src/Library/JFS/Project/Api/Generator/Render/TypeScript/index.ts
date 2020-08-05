import JavaScript from '../JavaScript';
import { TypeScript } from './Types';

class TypeScript {
  static annotation: TypeScript.Static.Annotation = ({ type, optional }) => (
    type
      ? `${
        optional
          ? '?'
          : ''
        }: ${type}`
      : ''
  );

  static generics: TypeScript.Static.Generics = (...generics: string[]) => (
    generics.length
      ? `<${generics.join(', ')}>`
      : ''
  );

  static namespace: TypeScript.Static.Namespace = ({ name, what }) => (
    `namespace ${name} ${JavaScript.braces({
      lines: [
        what
      ],
      indentation: 2
    })}`
  );

  static assignment: TypeScript.Static.Assignment = ({
    name, value, generics, annotation
  }) => JavaScript.assignment({
    name: [
      name,
      TypeScript.generics(...generics),
      annotation ? TypeScript.annotation(annotation) : ''
    ].join(''),
    value
  });

  static type: TypeScript.Static.Type = ({
    name,
    generics,
    value
  }) => `type ${
    TypeScript.assignment({ name, generics, value })
  }`;

  static interface: TypeScript.Static.Interface = ({
    name, generics, lines
  }) => `interface ${name[0].toUpperCase() + name.substring(1)}${TypeScript.generics(...(generics || []))} ${
    JavaScript.braces({ lines, indentation: 2 })
  }`

  static variable: TypeScript.Static.Variable = ({
    constant, value, name, annotation
  }) => (
    JavaScript.variable({
      constant,
      value,
      name: name + TypeScript.annotation(annotation || {})
    })
  );

  static parameter: TypeScript.Static.Parameter = ({
    name, defaultValue, ...annotation
  }) => JavaScript.parameter({
    name: `${name}${TypeScript.annotation(annotation)}`,
    defaultValue
  });

  static parameters: TypeScript.Static.Parameters = (
    parameters
  ) => JavaScript.parameters(parameters, TypeScript.parameter);

  static function: TypeScript.Static.Function = ({
    parameters, body, fatArrow, generics, returnAnnotation
  }) => {
    const addGenerics = (rendered: string, fatArrow: boolean | { shortSyntax: boolean; }) => (
      fatArrow === false
        ? rendered.replace(
          'function',
          'function' + TypeScript.generics(...(generics || []))
        )
        : TypeScript.generics(...(generics || [])) + rendered
    );

    const addAnnotation = (rendered: string) => (
      rendered.replace(
        ')',
        ')' + TypeScript.annotation({ type: returnAnnotation.type })
      )
    );

    return [
      addAnnotation,
      addGenerics
    ].reduce(
      (rendered, mapper) => mapper(rendered, fatArrow),
      JavaScript.function({
        parameters,
        fatArrow,
        body,
        mapParameters: TypeScript.parameters
      })
    );
  }
}

export default TypeScript;
