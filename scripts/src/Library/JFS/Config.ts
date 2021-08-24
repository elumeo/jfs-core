import path from 'path';
import fs from 'fs-extra';

export const template = async (root: string) => (
  (await fs.readJSON(path.resolve(root, 'config.dist.json'))) as Record<string, unknown>
);

export const get = async (root: string) => (
  (await fs.readJSON(path.resolve(root, 'config.json'))) as Record<string, unknown> & {
    JscClient: {
      Host: string;
    }
  }
);