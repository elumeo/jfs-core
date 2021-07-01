import * as Render from '../Render';
import * as Text from 'Library/Text';
import * as Type from './Type';
import * as DTO from './DTO';

export const resource = (resource: Render.Type.JSC.Client.Method.Resource) => ({
  ...resource,
  type: {
    ...resource.type,
    name: (
      Text.Prefix.match(resource.type.name, 'DTO')
        ? DTO.type(resource.type.name)
        : resource.type.name
    ),
    generics: (
      resource.type.generics
        .map(generic => (
          Text.Prefix.match(generic, 'DTO')
            ? DTO.type(generic)
            : generic
        ))
    )
  }
});

export const methods = (methods: Render.Type.JSC.Client.Method.Description[]) => (
  methods.map(
    method => ({
      ...method,
      resource: resource(method.resource),
      parameters: method.parameters.map(parameter => ({
        ...parameter,
        type: (
          Text.Prefix.match(parameter.type, 'DTO')
            ? DTO.type(parameter.type)
            : parameter.type
        )
      }))
    })
  )
);

export const namespaces = (clients: Render.Type.JSC.Client.Description[]) => (
  clients
    .map(client => ({
      ...client,
      methods: methods(client.methods),
      name: client.name.replace('Controller', 'Client')
    }))
);