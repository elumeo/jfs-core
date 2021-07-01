import * as Code from '../Code';
import * as TypeScript from '../TypeScript';
import * as Render from 'Library/JFS/API/Render';
import * as Text from '../Text';
import * as EcmaScript from '../EcmaScript';

export const constant = (constant: Render.Type.JSC.DTO.Constant) => Code.Declaration.constant({
  name: `I_${constant.name}`,
  value: `'${constant.value}'`
});

export const property = (name: string, { type, generics = [], array }: Render.Type.JSC.DTO.Property) => (
  `${type}${TypeScript.generics(...generics)}${array ? '[]' : ''}`
);

const _interface = (description: Render.Type.JSC.DTO.Description) => TypeScript.interface({
  name: (
    'I'
    + description.name.substring(description.name.lastIndexOf('\\') +1)
    + TypeScript.generics(...description.generics)
  ),
  lines: [
    ...(
      Object
        .keys(description.properties)
        .map(key => `${key}?: ${property(key, description.properties[key])};`)
    )
  ]
});

export { _interface as interface };

export const namespace = ({ name, constants = [], dtos, namespaces }: Render.Type.JSC.DTO.Namespace): string => (
  TypeScript.namespace({
    name,
    what: Text.lines(
      ...[
        ...constants.map(constant),
        ...dtos.map(_interface),
        ...namespaces.map(namespace)
      ].map(EcmaScript.export)
    )
  })
);