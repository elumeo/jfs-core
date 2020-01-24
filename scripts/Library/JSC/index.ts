import { resolve } from 'path';
import axios from 'axios';
import color from 'ansi-colors';

import File from "Library/Filesystem/File";
import CLI from "Library/CLI";

class JSC {
    private static endpoint = ({
        versionNumber,
        endpointNameReady
    }: { endpointNameReady: (endpointName: string) => void, versionNumber?: number }) => {
        JSC.jfsConfig(
            jfsConfig => endpointNameReady(
                `${jfsConfig.JscClient.Host}/client/generated/v${versionNumber || 2}`
            )
        );
    };

    private static projectPath: string = resolve(
        process.cwd(),
        CLI.parameter('project-path')
    );

    private static apiFile = new File({
        path: resolve(JSC.projectPath, 'src', 'JscApi.ts')
    });

    private static jscApiConfigFile = new File({
        path: resolve(JSC.projectPath, 'jscApiConfig.json')
    });

    private static jfsConfigFile = new File({
        path: resolve(JSC.projectPath, 'config.json.dist')
    });

    private static jfsConfig = (configReady: (config: { [key: string]: any }) => void) => JSC.jfsConfigFile.read({
        dataReady: configString => configReady(JSON.parse((configString as string)))
    });

    private static jscApiConfig = (configReady: (config: { [key: string]: any }) => void) => JSC.jscApiConfigFile.read({
        dataReady: configString => configReady(JSON.parse((configString as string)))
    });

    private static parseHash = (apiString: string) => (
        (apiString as string).match(/export const JSC_API_VERSION: string = '(.*)';/g)[0]
    );

    private static apiVersion = (apiVersionReady: (apiHash: string) => void) => JSC.apiFile.read({
       dataReady: apiString => apiVersionReady(
           JSC.parseHash(apiString as string)
       )
    });

    public static check = () => JSC.endpoint({
        endpointNameReady: endpointName => (
            JSC.jscApiConfig(
                jscApiConfig => (
                    axios
                        .post(endpointName, jscApiConfig, {
                            params: {
                                options: `elumeoPath:${CLI.parameter('elumeoPath')}`
                            }
                        })
                        .then(
                            ({ data }) => {
                                JSC.apiVersion(
                                    apiHash => {
                                        console.log(
                                            JSC.parseHash(data) === apiHash
                                                ? color.green('√ The JscApi is up to date - nothing to do')
                                                : color.red('The JscApi has been changed - please review and update')
                                        );
                                    }
                                )
                            }
                        )
                )
            )
        )
    })

    public static generate = () => JSC.endpoint({
        versionNumber: CLI.parameter('version') || 2,
        endpointNameReady: endpointName => (
            JSC.jscApiConfig(
                jscApiConfig => (
                    axios
                        .post(endpointName, jscApiConfig)
                        .then(
                            ({ data }) => {
                                JSC.apiFile.write({
                                    data,
                                    dataWritten: () => console.log(
                                        color.green(`√ New JscApi File '${JSC.apiFile.path}' successfully created`)
                                    )
                                })
                            }
                        )
                        .catch(
                            error => console.error(
                                color.red(`System Error => ${error.message}`)
                            )
                        )
                )
            )
        )
    })
}

export default JSC;