import { resolve } from 'path';
import color from 'ansi-colors';
import File from "Library/Filesystem/File";
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
            '..'
        )
    });

    public static deployAppSettings = () => {

        const appDirectory = new Directory({
            path: resolve(
                process.cwd(),
                CLI.parameter('project-path'),
            )
        });

        const globalSettingsDirectory = new Directory({
            path: resolve(
                __dirname,
                '..',
                'settings'
            )
        });

        globalSettingsDirectory.directory({
            directoryName: 'frontend',
            directoryReady: frontendDirectory => {
                globalSettingsDirectory.files(
                    globalSettingsFiles => {
                        frontendDirectory.files(
                            frontendDirectoryFiles => {
                                let copiedFiles = 0;
                                const filesToCopy = [
                                    ...frontendDirectoryFiles
                                        .filter(({ name }) => ['tsconfig.json', 'tslint.json'].includes(name)),
                                    ...globalSettingsFiles
                                ];

                                filesToCopy.forEach(
                                    file => {
                                        file.copy({
                                            newPath: resolve(
                                                appDirectory.path,
                                                file.name
                                            ),
                                            fileCopied: () => {
                                                if (++copiedFiles === filesToCopy.length) {
                                                    console.log(
                                                        color.greenBright('Deployed config files')
                                                    );
                                                }
                                            }
                                        })
                                    }
                                )
                            }
                        )
                    }
                )
            }
        });
    };

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

        Core.developmentInstance().directory({
            directoryName: 'scripts',
            directoryReady: (srcDirectory: Directory) => {
                srcDirectory.sync(
                    resolve(
                        Core.projectInstance().path,
                        'scripts'
                    )
                );
            }
        });
    }

    private static scriptsDirectory = (scriptsDirectoryReady: (scriptsDirectory: Directory) => void) => {
        Core.developmentInstance().directory({
            directoryName: 'scripts',
            directoryReady: scriptsDirectory => scriptsDirectoryReady(scriptsDirectory)
        })
    };

    public static scriptFiles = (scriptFilesReady: (scriptFiles: File[]) => void) => {
        Core.scriptsDirectory(
            scriptsDirectory => scriptsDirectory.directory({
                directoryName: 'Setup',
                directoryReady: (setupDirectory: Directory) => setupDirectory.files(
                    files => scriptFilesReady(files)
                )
            })
        )
    };

    public static compileScripts = (scriptFiles) => {
        const scriptFile: File = scriptFiles[0];
        Core.scriptsDirectory(
            scriptsDirectory => scriptFile.copy({
                newPath: resolve(
                    scriptsDirectory.path,
                    'index.ts'
                ),
                fileCopied: () => {
                    scriptsDirectory.run({
                        command: 'npm',
                        parameters: [
                            'run',
                            'build-scripts',
                            '--',
                            '--output-filename',
                            scriptFile.name.replace('.ts', '.js')
                        ],
                        commandExited: () => {
                            if (scriptFiles.length > 1) {
                                Core.compileScripts(scriptFiles.slice(1, scriptFiles.length))
                            }
                        }
                    })
                }
            })
        )
    };

}

export default Core;