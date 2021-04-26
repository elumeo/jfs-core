import fs from 'fs-extra';
import { resolve } from 'path';

type Config = {
  local?: {
    namespace?: string;
  };
  remote: {
    [controllerName: string]: string[];
  };
};

export const read = async (path: string) => (
  (await fs.readJSON(
    resolve(path, 'src', 'API', 'JSC', 'Config.json')
  )) as Config
);
