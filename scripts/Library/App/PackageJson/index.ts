import { resolve } from 'path';
import File from 'Library/Filesystem/File';
import LocalLink from "./LocalLink";
import App from "../index";

class PackageJson {

    public static file: File = new File({
        path: resolve(
            App.appPath(),
            'package.json'
        )
    });

    private static dependencies = (dependenciesReady) => PackageJson.file.read({
        dataReady: data => dependenciesReady(
            JSON.parse(data as string).dependencies
        )
    });

    public static localLinks = (localLinksReady) => PackageJson.dependencies(
        dependencies => localLinksReady(
            Object.keys(dependencies)
                .filter(dependencyName => LocalLink.isLocalLink(dependencies[dependencyName]))
                .map(dependencyName => new LocalLink({
                    linkName: dependencyName,
                    linkPath: resolve(
                        PackageJson.file.parent,
                        LocalLink.extractLocalPath(dependencies[dependencyName])
                    )
                }))
        )
    );

}

export default PackageJson;