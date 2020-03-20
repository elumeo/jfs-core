import Directory from "Library/OS/Filesystem/Directory";
import {resolve} from "path";
import color from "ansi-colors";
import Notifier from "Library/Notifier";
import NodePackage from "Library/Node/Package";

interface ILocalLink {
  linkName: string;
  linkPath: string;
}

class LocalLink {

    public static prefix: string = 'jfs-sync: ';

    public static isLocalLink = (dependencyVersion: string) => (
        dependencyVersion.substring(0, LocalLink.prefix.length) === LocalLink.prefix
    );

    public static extractPath = (linkPath: string) => (
        linkPath.substring(LocalLink.prefix.length, linkPath.length)
    );

    private readonly linkName: string;
    private readonly linkPath: string;
    private linkDirectory: Directory;

    constructor(props: ILocalLink) {
        this.linkName = props.linkName;
        this.linkPath = props.linkPath;
        this.linkDirectory = new Directory({
            path: this.linkPath
        });
    }

    public toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;

    public sync = (
        projectPath: string,
        syncList: string[]
    ) => this.linkDirectory.directories(directories =>
        directories
            .filter(({ name }) => syncList['includes'](name))
            .forEach(
                directory => directory.sync(
                    resolve(
                        projectPath,
                        'node_modules',
                        this.linkName,
                        directory.name
                    ),
                    `${color.yellow(this.linkName)}/${color.cyan(directory.name)}`
                )
            )
    );

    public static showLocalLinks = (localLinks: LocalLink[]) => console.log(
        localLinks
            .map((localLink: LocalLink) => color.green(localLink.toString()))
            .join('\n'),
        '\n'
    );

    public static warnNoLocalLinks = () => console.warn(
        Notifier.framedMessage(
            Notifier.multiLineMessage(
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
                            `"${LocalLink.prefix}path/to/jfs/module"`
                        )
                    )
                }`
            )
        )
    );

    public static fromDependency = (
      nodePackage: NodePackage,
      name: string,
      value: string
    ): LocalLink => (
      new LocalLink({
          linkName: name,
          linkPath: resolve(
            nodePackage.file.parent,
            LocalLink.extractPath(value)
          )
      })
    )

}


export default LocalLink;
