import axios from "axios";
import color from "ansi-colors";
import JFS from "Library/JFS";
import CLI from "Library/CLI";
import Api from "./Api";

export type ApiGeneratorConfig = {
    [key: string]: string;
}

class ApiGenerator {

    private static endpoint = ({
        versionNumber,
        endpointNameReady
    }: { endpointNameReady: (endpointName: string) => void, versionNumber?: number }) => {
        JFS.config(
            jfsConfig => endpointNameReady(
                `${jfsConfig.JscClient.Host}/client/generated/v${versionNumber || 2}`
            )
        );
    };

    private static axiosParams = () => (
        CLI.parameter('elumeoPath')
            ? {
                params: {
                    options: `elumeoPath:${CLI.parameter('elumeoPath')}`
                }
            }
            : null
    );

    public static fetchApi = (api: Api, versionNumber, apiFetched: (apiString: string) => void) => (
        Api.config(
            jscApiConfig => ApiGenerator.endpoint({
                versionNumber,
                endpointNameReady: endpointName => (
                    axios
                        .post(endpointName, jscApiConfig, ApiGenerator.axiosParams())
                        .then(({ data: apiString }) => apiFetched(apiString))
                        .catch(error => {
                            console.error(color.red(`System Error => ${error.message}`));
                            console.log(error.data);
                        })
                )
            })
        )
    );

    public static generate = (api: Api, versionNumber = 2) => (
        ApiGenerator.fetchApi(
            api,
            versionNumber,
            apiString => Api.file.write({
                data: apiString,
                dataWritten: () => console.log(
                    color.green(`√ New JscApi File '${Api.file.path}' successfully created`)
                )
            })
        )
    );

    public static check = (api: Api, versionNumber = 2) => (
        ApiGenerator.fetchApi(
            api,
            versionNumber,
            apiString => Api.version(
                apiHash => console.log(
                    Api.parseHash(apiString) === apiHash
                        ? color.green('√ The JscApi is up to date - nothing to do')
                        : color.red('The JscApi has been changed - please review and update')
                )
            )
        )
    )

}

export default ApiGenerator;