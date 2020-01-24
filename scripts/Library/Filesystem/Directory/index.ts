import { readdir, mkdir } from 'fs';
import FsNode, {IFsNodeProps} from '../FsNode';
import File from '../File';
import {resolve} from "path";
import rmdir from 'rimraf';
import ncp from 'ncp';
import {ChildProcess, spawn, SpawnOptions} from "child_process";
import chokidar, {FSWatcher} from 'chokidar';

import handleChange from "./handleChange";

interface IChildren {
    directories: Directory[];
    files: File[];
}

interface ICopySettings {
    newPath: string;
    directoryCopied: () => void;
}

class Directory extends FsNode {

    public children = (childrenReady: ({ directories, files }: IChildren) => void) => {
        readdir(
            this.path,
            (error: NodeJS.ErrnoException, childrenNames: string[]) => {
                if (error) {
                    throw error;
                }
                else {
                    const files = [];
                    const directories = [];
                    childrenNames.forEach(
                        (childName) => {
                            const fsNodeProps: IFsNodeProps = { path: resolve(this.path, childName) };
                            const fsNode = new FsNode(fsNodeProps);
                            fsNode.stats(stats => {
                                if (stats.isDirectory()) {
                                    directories.push(new Directory(fsNodeProps));
                                }
                                else {
                                    files.push(new File(fsNodeProps));
                                }
                                if (childrenNames.length === files.length + directories.length) {
                                    childrenReady({
                                        directories,
                                        files
                                    });
                                }
                            });
                        }
                    );
                }
            }
        );
    };

    public child = ({
        childName,
        childReady
    }) => this.children(
        ({ files, directories }: IChildren) => childReady(
            files.find(file => file.name === childName) ||
            directories.find(directory => directory.name === childName)
        )
    );

    public files = (filesReady: (files: File[]) => void) => this.children(
        ({ files }) => filesReady(files)
    );

    public file = ({
        fileName,
        fileReady
    }) => this.files(
        files => fileReady(
            files.find(file => file.name === fileName)
        )
    );

    public directories = (directoriesReady: (directories: Directory[]) => void) => this.children(
        ({ directories }) => directoriesReady(directories)
    );

    public directory = ({
        directoryName,
        directoryReady
    }) => this.directories(
        directories => directoryReady(
            directories.find(directory => directory.name === directoryName)
        )
    );

    public remove = (directoryRemoved: () => void) => rmdir(this.path, directoryRemoved);

    public copy = ({ newPath, directoryCopied }: ICopySettings) => ncp(
        this.path,
        newPath,
        (error) => {
            if (error) {
                throw error;
            }
            else {
                directoryCopied();
            }
        }
    );

    public run = ({
        command,
        parameters,
        commandExited
    }) => {
        const options: SpawnOptions = {};
        options.cwd = this.path;
        const task: ChildProcess = spawn(command, parameters, options);
        task.stdout.on('data', data => console.log(data.toString()));
        task.stderr.on('data', data => console.log(data.toString()));
        task.on('exit', code => commandExited(code, task));
    }

    public watch = (watcherReady: (watcher: FSWatcher) => void) => watcherReady(
        chokidar.watch(resolve(this.path))
    )

    public create = (directoryCreated: () => void) => mkdir(
        this.path,
        directoryCreated
    )

    public sync = (targetBasePath: string) => {
        this.copy({
            newPath: targetBasePath,
            directoryCopied: () => {
                this.watch(
                    watcher => setTimeout(
                        () => watcher.on(
                            'all',
                            (event, sourcePath) => {
                                const corePath = sourcePath.substring(
                                    this.path.length,
                                    sourcePath.length
                                );

                                handleChange({
                                    event,
                                    sourcePath,
                                    targetPath: [
                                        targetBasePath,
                                        corePath
                                    ].join(''),
                                    corePath
                                })
                            }
                        ),
                        1000
                    )
                );
            }
        })
    }
}

export default Directory;