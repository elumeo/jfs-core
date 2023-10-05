import * as Code from '../Code';
import * as TypeScript from '../TypeScript';
import * as Render from '../';
import { Description as DTODescription, Namespace as DTONamespace } from '../Type/JSC/DTO'
import * as Text from '../Text';
import * as EcmaScript from '../EcmaScript';
import { Module } from "../Type/TypeScript";

export const constant = (constant: Render.Type.JSC.DTO.Constant) =>
    Code.Declaration.constant({
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

const _type = (description: Render.Type.JSC.DTO.Description) =>
    TypeScript.type({
        name: (
            'I'
            + description.name.substring(description.name.lastIndexOf('\\') + 1)
            + TypeScript.generics(...description.generics)
        ),
        value: Code.Block.braces({
            lines: [
                ...Object
                    .keys(description.properties)
                    .map(key => `${key}?: ${property(key, description.properties[key])};`)
            ],
            indentation: 4
        })
    });

export { _type as type }

export const toModule = (
    description: DTONamespace | DTODescription,
    parentNamespace: string = 'DTO'
): Module => {
    const isDTODescription = !!(description as DTODescription)?.properties;
    if (isDTODescription) {
        const dto = description as DTODescription;
        return {
            name: dto.name,
            namespace: parentNamespace,
            modules: [],
            code: EcmaScript.export(_type(dto))
        }
    } else {
        const namespace = description as DTONamespace;
        const namespaceFullName = [parentNamespace, namespace.name].join('.')
        return {
            name: namespace.name,
            namespace: namespaceFullName,
            modules: [
                ...namespace.dtos.map(dto => toModule(dto, namespaceFullName)),
                ...namespace.namespaces.map(n => toModule(n, namespaceFullName))
            ],
            code: Text.lines(
                ...namespace.constants
                    .map(constant)
                    .map(EcmaScript.export)
            ),
        }
    }
}
