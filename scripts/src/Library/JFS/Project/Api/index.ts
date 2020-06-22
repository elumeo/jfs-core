import { readFile, writeFile, existsSync } from 'fs';
import { resolve } from 'path';
import JsonDiff from 'json-diff';
import Config from './Config';
import API from './Generator/API';
import * as Generator from './Generator/API/Types';
import Project from 'Library/JFS/Project';

class JSC {
  path: string;
  public config: Config;

  public static location = (path: string) => resolve(
    path,
    'src',
    'Jsc'
  );

  constructor(path: string) {
    this.path = path;
    this.config = new Config(
      resolve(path, 'Api', 'config.json')
    );
  }

  public generate = (
    project: Project,
    options?: {
      namespace?: string;
      core?: boolean;
    }
  ) => this.describe(
    project,
    (description) => this.check({
      description,
      onComplete: result => {
        if (result) {
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
    project: Project,
    onDescription: (description: Generator.API.Description) => void
  ) => (
    project.config.read(
      ({
        JscClient: {
          Host: host
        }
      }) => project.JSC.config.read(
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
              JsonDiff.diffString(description, JSON.parse(data))
            );
          }
        }
      );
    }
  }

}

export default JSC;
