import fs from 'fs-extra';
import { resolve } from 'path';
import JsonDiff from 'json-diff';
import * as Render from './Render';

export const run = async (
  path: string,
  description: Render.Type.JSC.Description
): Promise<string> => {
  if (!fs.existsSync(resolve(path, 'src', 'API', 'JSC', 'Description.json'))) {
    return 'No description found.';
  }
  else {
    const data = await fs.readFile(
      resolve(path, 'src', 'API', 'JSC', 'Description.json'),
      'utf8'
    );

    return JsonDiff.diffString(description, JSON.parse(data));
  }
}