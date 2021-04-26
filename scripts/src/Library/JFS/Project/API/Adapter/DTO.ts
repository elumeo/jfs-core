import * as Text from 'Library/Text';
import * as Type from './Type';
import * as Render from '../Render';

export const type = (type: string) => {
  if (Text.Prefix.match(type, 'DTO')) {
    const segments = type.split('.');
    const last = segments[segments.length -1];
    return [
      ...segments.slice(0, segments.length -1),
      `I${last}`
    ].join('.');
  }
  else {
    return type;
  }
};

export const properties = (properties: Type.Properties) => (
  Object
    .keys(properties)
    .reduce(
      (normalized, key) => {
        const property = properties[key];
        return {
          ...normalized,
          [key]: {
            ...property,
            type: (
              Text.Prefix.match(property.type, 'DTO')
                ? type(property.type)
                : property.type
            )
          }
        };
      },
      {}
    )
)

export const namespaces = (root: Render.Type.JSC.DTO.Namespace[]) => (
  root.map(namespace => ({
    ...namespace,
    dtos: namespace.dtos.map(dto => ({
      ...dto,
      properties: properties(dto.properties)
    })),
    namespaces: namespaces(namespace.namespaces)
  }))
);