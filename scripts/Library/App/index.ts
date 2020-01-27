import File from "Library/Filesystem/File";
import Directory from "Library/Filesystem/Directory";
import { resolve } from "path";
import CLI from "../CLI";
import color from 'ansi-colors';

class App {

    private static packageJson = new File({
        path: resolve(
            process.cwd(),
            CLI.parameter('project-path'),
            'package.json'
        )
    });

    private static dependencies = (dependenciesReady) => App.packageJson.read({
        dataReady: data => dependenciesReady(
            JSON.parse(data as string).dependencies
        )
    });

    public static syncLocalDependencies = () => {
        App.dependencies(
            dependencies => {
                Object
                    .keys(dependencies)
                    .map(dependencyName => {
                        const dependencyVersion = dependencies[dependencyName];
                        const hasLocalLink = dependencyVersion.substring(0, 3) === '../';
                        if (hasLocalLink) {
                            const localDependencyDirectory = new Directory({
                                path: resolve(
                                    App.packageJson.parent,
                                    dependencyVersion
                                )
                            });

                            const syncDirectoryNames = [
                                'src',
                                'settings',
                                'scripts'
                            ];

                            localDependencyDirectory.directories(
                                directories => {
                                    directories
                                        .filter(({ name }) => syncDirectoryNames.includes(name))
                                        .forEach(directory => {
                                            directory.sync(
                                                resolve(
                                                    App.packageJson.parent,
                                                    'node_modules',
                                                    dependencyName,
                                                    directory.name
                                                ),
                                                `${color.yellow(dependencyName)}/${color.cyan(directory.name)}`
                                            )
                                        })
                                }
                            )
                        }
                    })
            }
        )
    }

}

export default App;