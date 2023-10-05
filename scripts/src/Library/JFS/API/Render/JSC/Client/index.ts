import { JSC, TypeScript } from '../../../Render/Type';
import * as Render from "../../../Render";
import * as Client from '../Client';

export * as HTTP from './HTTP';
export * as WebSocket from './WebSocket';

export const toModule = (
    client: JSC.Client.Description,
    options: Render.Type.Generator.Options,
    parentNamespace: string = 'Client'): TypeScript.Module => {
    const namespaceFullName = [parentNamespace, client.name].join('.')
    return {
        name: client.name,
        namespace: namespaceFullName,
        modules: [],
        code: Render.Text.lines(
            Render.JSC.Import.HTTP(options.context == 'core'),
            ...client.methods
                .filter(({ protocol }) => protocol.name === 'HTTP')
                .map(Client.HTTP.request),
            ...client.methods
                .filter(({ protocol }) => protocol.name === 'WS')
                .map(Client.WebSocket.stream)
        )
    }
}
