import File from "Library/Filesystem/File";
import Directory from "Library/Filesystem/Directory";
import { resolve } from "path";
import CLI from "../CLI";
import color from 'ansi-colors';

class App {

    private static localLinkPrefix: string = 'jfs-sync: ';

    private static syncDirectoryNames: string[] = [
        'src',
        'settings',
        'scripts'
    ];

    private static packageJson = new File({
        path: resolve(
            process.cwd(),
            CLI.parameter('project-path') || '.',
            'package.json'
        )
    });

    private static dependencies = (dependenciesReady) => App.packageJson.read({
        dataReady: data => dependenciesReady(
            JSON.parse(data as string).dependencies
        )
    });

    private static hasLocalLink = (dependencyVersion: string) => (
        dependencyVersion.substring(0, App.localLinkPrefix.length) === App.localLinkPrefix
    );

    private static extractLocalLink = (dependencyVersion: string) => (
        dependencyVersion.substring(App.localLinkPrefix.length, dependencyVersion.length)
    )

    private static localLinkedDependencies = (localLinkedDependenciesReady) => App.dependencies(
        dependencies => localLinkedDependenciesReady(
            Object.keys(dependencies)
                .filter(dependencyName => App.hasLocalLink(dependencies[dependencyName]))
                .map(dependencyName => ({
                    dependencyName,
                    localLink: App.extractLocalLink(dependencies[dependencyName])
                }))
        )
    );

    private static framedMessage = (message: string) => [
        '',
        '-------------------------------------------------------------------------------------------------------------',
        '',
        message,
        '',
        '-------------------------------------------------------------------------------------------------------------',
        ''
    ].join('\n');

    public static syncLocalDependencies = () => {
        App.localLinkedDependencies(
            localLinkedDependencies => {
                if (!localLinkedDependencies.length) {
                    console.warn(
                        App.framedMessage(
                            [
                                color.yellow(
                                    [
                                        'WARNING: No local links to jfs-core or jfc components detected.',
                                        'Please check your dependencies.'
                                    ].join(' ')
                                ),
                                '',
                                `Troubleshooting: Your local link pattern should match ${
                                    color.green(
                                        color.bold(
                                            `"${App.localLinkPrefix}path/to/jfs/module"`
                                        )
                                    )
                                }`,
                            ].join('\n')
                        )
                    );
                }
                else {
                    console.log(
                        localLinkedDependencies.map(
                            ({ dependencyName, localLink }) => color.green(
                                `Link: ${dependencyName} --> ${
                                    resolve(
                                        App.packageJson.parent,
                                        localLink
                                    )
                                }`
                            )
                        ).join('\n'),
                        '\n'
                    );
                }

                localLinkedDependencies
                    .forEach(dependency => {
                        const { dependencyName, localLink } = dependency;
                        const localDependencyDirectory = new Directory({
                            path: resolve(
                                App.packageJson.parent,
                                localLink
                            )
                        });

                        localDependencyDirectory.directories(
                            directories => {
                                directories
                                    .filter(({ name }) => App.syncDirectoryNames.includes(name))
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
                    })
            }
        );
    }

}

export default App;