import fs from 'fs-extra';
import axios from 'axios';
import { resolve } from 'path';
import * as Config from './Config';
import * as JFS from 'Library/JFS';
import * as Text from 'Library/Text';

export const save = (path: string, description: unknown) =>
    fs.writeFile(
        resolve(path, 'src', 'API', 'JSC', 'Description.json'),
        JSON.stringify(description, null, 17)
    )

export const generate = async (path: string): Promise<object> => {
    const remote = {
        host: (await JFS.Config.get(path)).JscClient.Host,
        path: '/openapi/description',
        configuration: (await Config.read(path)).remote,
    };

    const url = `${remote.host}${remote.path}`;
    try {
        return axios.get(
            (['http', 'https'].some(protocol => Text.Prefix.match(url, protocol))
                ? url
                : `http://${url}`),
            {
                params: {
                    // filter: 'controllers:' + Object.keys(remote.configuration).join(','),
                    filter: 'services:WebProxy',
                    XDEBUG_SESSION_START: '1'
                }
            }
        ).then(response => {
            console.log({ response })
            return response
        })

    } catch (error) {
        console.log(error);
    }
};
