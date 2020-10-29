import DTO from './DTO';
import Client from './Client';
import Text from 'Library/Text';
import Description from './DTO/Description';

type Options = {
  namespace: string;
}

type Property = {
  type: string;
  array: boolean;
  generics: string[];
};

type Properties = {
  [name: string]: Property;
};

class Preprocessor {
  static mapType = (type: string, options: Options) => (
    Text.beginsWith(type, 'DTO')
      ? `${options.namespace}.${type.split('.').reduce(
        (text, sequence, index, array) => (
          text
          +(index ? '.' : '')
          +(index === array.length -1 ? 'I' : '')
          +sequence
        ),
        ''
      )}`
      : type
  );

  static mapProperty = (property: Property, options: Options) => ({
    ...property,
    type: Preprocessor.mapType(property.type, options)
  });

  static mapProperties = (
    properties: Properties,
    options: Options
  ) => Object.keys(properties).reduce(
    (mapped, key) => ({
      ...mapped,
      [key]: Preprocessor.mapProperty(properties[key], options)
    }),
    {}
  );

  static mapDTO = (dto: Description.DTO, options: Options) => ({
    ...dto,
    properties: Preprocessor.mapProperties(dto.properties, options)
  });

  static mapDTOGroup = (
    group: DTO.Group,
    options: Options
  ) => ({
    ...group,
    dtos: group.dtos.map(dto => Preprocessor.mapDTO(dto, options)),
    namespaces: group.namespaces.map(
      group => Preprocessor.mapDTOGroup(group, options)
    )
  })

  static mapDTOs = (groups: DTO.Group[], options: Options) => groups.map(
    group => Preprocessor.mapDTOGroup(group, options)
  );

  static mapParameters = (
    parameters: Client.Method.Parameter[],
    options: Options
  ) => parameters.map(parameter => {
    if (Text.beginsWith(parameter.type, 'DTO')) {
      return {
        ...parameter,
        type: Preprocessor.mapType(parameter.type, options)
      }
    }
    else {
      return parameter;
    }
  });

  static mapGenerics = (
    generics: string[],
    options: Options
  ) => generics.map(
    generic => [
      options.namespace,
      Text.beginsWith(generic, 'DTO')
        ? generic.split('.').reduce(
          (typeName, sequence, index, array) => (
            typeName.length
              ? (
                [
                  typeName,
                  index === array.length -1
                    ? 'I' + sequence
                    : sequence
                ].join('.')
              )
              : sequence
          ),
          ''
        )
        : generic
    ].join('.')
  );

  static mapName = (
    name: string,
    options: Options
  ) => (
    Text.beginsWith(name, 'DTO')
      ? `${options.namespace}.${name.split('.').reduce(
        (typeName, sequence, index, array) => (
          typeName.length
            ? (
              [
                typeName,
                index === array.length -1
                  ? 'I' + sequence
                  : sequence
              ].join('.')
            )
            : sequence
        ),
        ''
      )}`
      : name
  )

  static mapMethods = (
    methods: Client.Method.Description[],
    options: Options
  ) => methods.map(
    ({ resource, ...method }) => ({
      ...method,
      resource: {
        ...resource,
        type: {
          ...resource.type,
          name: Preprocessor.mapName(resource.type.name, options),
          generics: Preprocessor.mapGenerics(resource.type.generics, options)
        }
      },
      parameters: Preprocessor.mapParameters(method.parameters, options)
    })
  )

  static mapClients = (
    clients: Client.Description[],
    options: Options
  ) => clients.map(
    ({ methods, ...client }) => ({
      methods: Preprocessor.mapMethods(methods, options),
      ...client,
      name: client.name.replace('Controller', 'Client')
    })
  )
}

export default Preprocessor;
