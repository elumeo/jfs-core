import fs from 'fs-extra';
import { join, resolve } from 'path';
import * as Prettier from 'prettier';
import { Adapter } from '.';
import * as Render from './Render';
import { Module } from './Render/Type/TypeScript';

export const format = (code: string): string => (
    Prettier.format(
        code,
        { parser: 'babel-ts' }
    )
);


export const cleanup = async (path: string) => {
    const apiPath = resolve(path, 'src', 'API', 'JSC')
    await fs.rm(join(apiPath, 'DTO'), { recursive: true }).catch(console.error)
    return fs.rm(join(apiPath, 'Client'), { recursive: true }).catch(console.error)
}

export const save = async (path: string, modules: Module[]) =>
    modules.map(async ({ name, namespace, code, modules: subModules }) => {
        const apiPath = resolve(path, 'src', 'API', 'JSC')
        const modulePath = namespace.split('.')
        const fileName = join(apiPath, ...modulePath, name + '.ts');
        console.log({ fileName, name, namespace, code, subModules })
        await fs.ensureFile(fileName)
        if (!!subModules.length) {
            await save(path, subModules)
            await save(path, [{
                name: 'index',
                namespace,
                modules: [],
                code: Render.Text.lines(...subModules.map(m =>
                    Render.EcmaScript.export(`* as ${m.name} from './${m.name}'`)
                ))
            }])
        }
        await fs.writeFile(fileName, format(code))
    })

export const generate = (
    description: Render.Type.JSC.Description,
    options: Render.Type.Generator.Options
): Module => {
    const remote = Adapter.adapt(description);

    const dtoModules: Module[] = remote.dtos
        .map(dto => Render.JSC.DTO.toModule(dto))
    const clientModules: Module[] = remote.clients
        .map(client => Render.JSC.Client.toModule(client, options))

    return {
        name: options.moduleName,
        modules: [...dtoModules, ...clientModules],
        namespace: '',
        code: ''
    };
    // return Render.Text.lines(
    //   Render.JSC.Import.HTTP(options.core),
    //   importWebSocketDependencies ? Render.JSC.Import.WebSocket(options.core) : '',
    //   Render.JSC.namespace({ name: options.name, remote }),
    //   Render.EcmaScript.export(`default ${options.name}`)
    // );
};
