import fs from 'fs-extra';
import axios from 'axios';
import { resolve } from 'path';
import * as Config from './Config';
import * as JFS from 'Library/JFS';
import * as Text from 'Library/Text';
import * as Render from './Render';

export const save = (path: string, description: Render.Type.JSC.Description) => {
  fs.writeFile(
    resolve(path, 'src', 'API', 'JSC', 'Description.json'),
    JSON.stringify(description, null, 2)
  );
};

export const generate = async (path: string): Promise<Render.Type.JSC.Description> => {
  const remote = {
    host: (await JFS.Config.get(path)).JscClient.Host,
    path: '/client/api/description',
    configuration: (await Config.read(path)).remote
  };

  const url = `${remote.host}${remote.path}`;
  try {
    return (
      (await axios.post<Render.Type.JSC.Description>(
        ['http', 'https'].some(protocol => Text.Prefix.match(url, protocol))
          ? url
          : `http://${url}`,
        remote.configuration
      )).data
    );
  }
  catch(error) {
    console.log(error);
  }
};