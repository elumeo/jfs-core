import { resolve } from 'path';
import color from 'ansi-colors';
import Directory from "Library/Filesystem/Directory";
import CLI from "Library/CLI";

class Core {

    private static projectInstance = () => new Directory({
        path: resolve(
            process.cwd(),
            CLI.parameter('project-path'),
            'node_modules',
            '@elumeo',
            'jfs-core'
        )
    });

    private static developmentInstance = () => new Directory({
        path: resolve(
            __dirname,
            '..',
            '..',
            '..'
        )
    });

    public static sync() {
        if (!CLI.parameter('project-path')) {
            console.error(
                color.red('Error: Missing path of related project')
            )
        }

        Core.developmentInstance().directory({
            directoryName: 'src',
            directoryReady: (srcDirectory: Directory) => {
                srcDirectory.sync(
                    resolve(
                        Core.projectInstance().path,
                        'src'
                    )
                );
            }
        });
    }

}

export default Core;