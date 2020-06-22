import { readFile, writeFile, existsSync } from 'fs';
import { resolve } from "path";
import JfsConfig from "Library/JFS/Config";
import JscConfig from 'Library/JFS/Project/Api/Config';
import API from '../API';
import * as Generator from '../API/Types';
import JsonDiff from 'json-diff';
import { greenBright } from 'ansi-colors';

class JSC {
  path: string;
  public config: JscConfig;

  public static API_CHECK_OK = [
    `   ${greenBright('OK')}  `,
    '|',
    `jsc-api-check        `,
    '|',
    'API is up to date'
  ].join(' ');

  public static location = (path: string) => resolve(
    path,
    'src',
    'Jsc'
  );

  constructor(path: string) {
    this.path = path;
    this.config = new JscConfig(
      resolve(path, 'Api', 'config.json')
    );
  }

  public generate = (
    JFS: {
      config: JfsConfig;
      JSC: { config: JscConfig; };
    },
    options?: {
      namespace?: string;
      core?: boolean;
    }
  ) => this.describe(
    JFS,
    (description) => this.check({
      description,
      onComplete: result => {
        if (result === JSC.API_CHECK_OK) {
          console.log(result);
        }
        else {
          API.generate({
            description,
            options: {
              namespace: (options || {}).namespace || 'JSCApi',
              core: (options || {}).core || false
            },
            onComplete: code => {
              this.saveDescription(description);
              this.saveCode(API.format(code));
            }
          })
        }
      }
    })
  );

  public saveCode = (code: string, onComplete?: () => void) => {
    writeFile(
      resolve(this.path, 'Api', 'index.ts'),
      code,
      (error) => {
        if (error) {
          throw error;
        }
        else if (onComplete) {
          onComplete();
        }
      }
    );
  }

  public describe = (
    JFS: {
      config: JfsConfig;
      JSC: { config: JscConfig; };
    },
    onDescription: (description: Generator.API.Description) => void
  ) => (
    JFS.config.read(
      ({
        JscClient: {
          Host: host
        }
      }) => JFS.JSC.config.read(
        ({ remote }) => API.describe({
          remote: {
            host: (host as string).replace('https://', ''),
            path: '/client/api/description',
            configuration: remote
          },
          onDescription
        })
      )
    )
  );


  public saveDescription = (description: Generator.API.Description) => {
    writeFile(
      resolve(this.path, 'Api', 'Description.json'),
      JSON.stringify(description, null, 2),
      () => {

      }
    );
  }

  public check = ({ description, onComplete }: {
    description: Generator.API.Description,
    onComplete: (diffSequence: string) => void
  }) => {
    if (!existsSync(resolve(this.path, 'Api', 'Description.json'))) {
      onComplete('No description found');
    }
    else {
      readFile(
        resolve(this.path, 'Api', 'Description.json'),
        'utf8',
        (error, data) => {
          if (error) {
            throw error;
          }
          else {
            onComplete(
              JsonDiff.diffString(description, JSON.parse(data)) ||
              JSC.API_CHECK_OK
            );
          }
        }
      );
    }
  }

}

export default JSC;
