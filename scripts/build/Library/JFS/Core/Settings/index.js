"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Settings {
    constructor(directory) {
        this.blackList = [];
        this.setBlackList = (...blackListNames) => {
            this.blackList = [...blackListNames];
        };
        this.compose = (subSettingsName, compsitionComplete) => (this.subSettings({
            subSettingsName,
            subSettingsReady: (subSettings) => compsitionComplete([
                this,
                subSettings
            ])
        }));
        this.subSettings = ({ subSettingsName, subSettingsReady }) => this.directory.directory(subSettingsName, directory => subSettingsReady(new Settings(directory)));
        this.files = (filesReady) => {
            this.directory.files(filesReady);
        };
        this.deploy = ({ path, deploymentDone }) => {
            const newFiles = [];
            this.directory.files(files => (files.forEach(file => {
                if (this.blackList['includes'](file.name)) {
                    newFiles.push(null);
                    if (newFiles.length === files.length) {
                        deploymentDone(newFiles);
                    }
                }
                else {
                    file.copy(`${path}/${file.name}`, (newFile) => {
                        newFiles.push(newFile);
                        if (newFiles.length === files.length) {
                            deploymentDone(newFiles);
                        }
                    });
                }
            })));
        };
        this.directory = directory;
    }
}
exports.default = Settings;
//# sourceMappingURL=index.js.map