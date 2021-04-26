import * as Type from '../../Type';
import * as Axios from '../../Axios';
import * as TypeScript from '../../TypeScript';
import * as EcmaScript from '../../EcmaScript';
import * as Code from '../../Code';

export const encodeURI = (name: string) => `encodeURI(
  typeof ${name} === 'number'
    ? (${name} as number).toString()
    : ${name}
)`;

const replacePathParameters = (path: string) => {
  const match = path.match(/:[^\/]*/gm);
  if (!match) {
    return path;
  }
  else {
    return (
      path.match(/:[^\/]*/gm).reduce(
        (path: string, sequence: string): string => path.replace(
          sequence,
          `' + ${encodeURI(sequence.substring(1))} + '`
        ),
        path
      )
    );
  }
}

export const request = ({ name, protocol, resource, parameters }: Type.JSC.Client.Method.Description) => (
  EcmaScript.export(
    Code.Declaration.constant({
      name,
      value: (
        ({ parameters, protocol, resource }) => (
          TypeScript.function({
            arrow: {
              short: true
            },
            parameters: [
              ...parameters.map(({ name, annotation }) => (
                name + TypeScript.annotation(annotation)
              )),
              'config' + TypeScript.annotation({
                type: 'IJscClientConfig',
                optional: true
              })
            ],
            body: Axios.request({
              client: 'JscClient',
              method: protocol.method,
              type: [
                resource.type.name,
                TypeScript.generics(...resource.type.generics),
                resource.type.array ? '[]' : ''
              ].join(''),
              path: replacePathParameters(resource.path),
              parameters: [
                ...parameters
                  .filter(({ name }) => (
                    !replacePathParameters(resource.path)
                      .includes(encodeURI(name))
                  ))
                  .map(({ name }) => name),
                'config'
              ]
            }),
            return: {
              type: 'Promise' + TypeScript.generics(
                'AxiosResponse' + TypeScript.generics(
                  resource.type.name + TypeScript.generics(
                    ...resource.type.generics
                  ) + (resource.type.array ? '[]' : '')
                )
              )
            }
          })
        )
      )({
        parameters: parameters.map(
          ({ name, type, optional, array }) => ({
            name,
            annotation: { type, optional, array }
          })
        ),
        protocol,
        resource
      })
    })
  )
);