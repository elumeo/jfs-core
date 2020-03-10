import File from "Library/Filesystem/File";
import CLI from "Library/CLI";
import {resolve} from "path";
import ApiGenerator, { ApiGeneratorConfig } from "./ApiGenerator";

class Api {

    public static file: File = new File({
        path: resolve(
            process.cwd(),
            'src',
            'Jsc',
            'JscApi.ts'
        )
    });

    private static configFile: File = new File({
        path: resolve(
            process.cwd(),
            'src',
            'Jsc',
            'JscApiConfig.json'
        )
    });

    public static config = (configReady: (config: ApiGeneratorConfig) => void) => Api.configFile.read({
        dataReady: configString => configReady(JSON.parse((configString as string)))
    });

    private static apiString = (apiStringReady: (apiString: string) => void) => Api.file.read({
        dataReady: apiString => apiStringReady(apiString as string)
    });

    public static parseHash = (apiString: string) => (
        (apiString as string).match(/export const JSC_API_VERSION: string = '(.*)';/g)[0]
    );

    public static version = (versionReady: (apiHash: string) => void) => Api.apiString(
        apiString => versionReady(
            Api.parseHash(apiString as string)
        )
    );

    public static generate = (generationComplete: () => void) => ApiGenerator.generate(
        generationComplete,
        CLI.parameter('version') || 2
    );

    public static check = () => ApiGenerator.check(
        CLI.parameter('version') || 2
    )

}

export default Api;
