import fs from 'fs-extra';
import { resolve } from 'path';
import * as Prettier from 'prettier';
import * as Adapter from './Adapter';
import * as Render from './Render';

export const format = (code: string): string => (
  Prettier.format(
    code,
    { parser: 'babel-ts' }
  )
);

export const save = async (path: string, code: string) => (
  fs.writeFile(
    resolve(path, 'src', 'API', 'JSC', 'index.ts'),
    format(code)
  )
);

export const generate = (
  description: Render.Type.JSC.Description,
  options: {
    namespace: string;
    core: boolean;
  }
): string => {
  const remote = Adapter.adapt(description);
  const webSocket = (
    remote.clients
      .map(({ name }) => name)
      .includes('WebSocketClient')
  );

  return Render.Text.lines(
    Render.JSC.Import.HTTP(options.core),
    webSocket
      ? Render.JSC.Import.WebSocket(options.core)
      : '',
    Render.JSC.namespace({ name: options.namespace, remote }),
    Render.EcmaScript.export(`default ${options.namespace}`)
  );
};