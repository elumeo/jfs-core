import path from 'path';
import fs from 'fs-extra';

export const get = async (root: string) => (
  (await fs.readJSON(path.resolve(root, 'config.dist.json'))) as {
    [key: string]: any;
  }
);