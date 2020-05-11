import Api from "./Api";
import { resolve } from "path";
import axios from 'axios';
import JfsConfig from "../Config";
import Config from './Config';
import color from "ansi-colors";
import CLI from "Library/OS/CLI";
import Directory from "Library/OS/Filesystem/Directory";

class JSC {

  private api: Api;
  private config: Config;

  public static location = (path: string) => resolve(
    path,
    'src',
    'Jsc'
  )

  constructor(path: string) {
    this.api = new Api(
      resolve(path, 'JscApi.ts')
    );
    this.config = new Config(
      resolve(path, 'JscApiConfig.json')
    );
  }

  private static axiosParams = () => (
    CLI.parameter('elumeoPath')
      ? {
        params: {
          options: `elumeoPath:${CLI.parameter('elumeoPath')}`
        }
      }
      : null
  );

  public fetch = (
    jfsConfig: JfsConfig,
    versionNumber: number = 2,
    fetchComplete: (apiString: string) => void
  ) => jfsConfig.read(
    config => {
      const endpoint = this.config.endpoint(config, versionNumber);
      console.log({ endpoint });
      this.config.read(
        jscApiConfig => (
          axios
            .post(endpoint, jscApiConfig, JSC.axiosParams())
            .then(({ data: apiString }) => fetchComplete(apiString))
            .catch(error => {
              const { data } = error.response;
              const message = data.match(/(?<=\[message\] => ).*/gm);
              console.error(
                  color.red(message)
              );
            })
        )
      )
    }
  )

  public generate = (
    jfsConfig: JfsConfig,
    versionNumber = 2,
    generationComplete: () => void,
  ) => (
    this.fetch(
      jfsConfig,
      versionNumber,
        apiString => this.api.update(
          apiString,
          () => {
            const message = color.green(
              `√ New JscApi File '${this.api.path}' successfully created`
            );
            console.log(message);
            const satelliteDirectory = new Directory({
              path: jfsConfig.file.parent
            });

            satelliteDirectory.run({
              command: 'node',
              parameters: [
                'node_modules/prettier/bin-prettier.js',
                '--write', './src/Jsc/JscApi.ts'
              ],
              commandExited: generationComplete
            });
          }
        )
    )
  );

  public check = (
    jfsConfig: JfsConfig,
    versionNumber = 2
  ) => (
    this.fetch(
      jfsConfig,
      versionNumber,
      apiString => this.api.version(
        apiHash => console.log(
          this.api.parseHash(apiString) === apiHash
            ? color.green('√ The JscApi is up to date - nothing to do')
            : color.red('The JscApi has been changed - please review and update')
        )
      )
    )
  )

}

export default JSC;
