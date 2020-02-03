import PackageJson from './PackageJson';
import LocalLink from './PackageJson/LocalLink';
import {resolve} from "path";
import CLI from "../CLI";

class App {

    public static appPath = () => resolve(
        process.cwd(),
        CLI.parameter('project-path') || '.',
    );

    private static syncDirectoryNames: string[] = [
        'src',
        'settings',
        'scripts'
    ];

    public static syncLocalDependencies = () => PackageJson.localLinks(
        localLinks => {
            if (!localLinks.length) {
                LocalLink.warnNoLocalLinks();
            }
            else {
                LocalLink.showLocalLinks(localLinks);
            }

            localLinks.forEach((localLink: LocalLink) => localLink.sync(
                PackageJson.file.parent,
                App.syncDirectoryNames
            ));
        }
    );

}

export default App;