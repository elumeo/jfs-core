import File from "Library/Filesystem/File";
import CLI from 'Library/CLI';
import { resolve } from "path";
import Directory from "../Filesystem/Directory";

type JfsConfig = {
    [key: string]: any;
}

type JfsConfigReady = (jfsConfig: JfsConfig) => void;

class JFS {

    private static projectPath = () => resolve(
        process.cwd(),
        CLI.parameter('project-path') || '.'
    );

    public static configFile = (
        configFileFound: JfsConfigReady,
        searchDirectoryPath: string = JFS.projectPath()
    ) => {
        const searchDirectory = new Directory({ path: searchDirectoryPath });
        const fileName = 'config.json.dist';
        searchDirectory.file({
            fileName,
            fileReady: file => {
                if (file) {
                    configFileFound(file)
                }
                else {
                    JFS.configFile(configFileFound, searchDirectory.parent);
                }
            }
        });
    };

    public static config = (jfsConfigReady: JfsConfigReady) => JFS.configFile(
        configFile => configFile.read({
            dataReady: jfsConfigString => jfsConfigReady(
                JSON.parse(jfsConfigString as string)
            )
        })
    );

}

export default JFS;