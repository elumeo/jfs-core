import Directory from "Library/OS/Filesystem/Directory";
import File from 'Library/OS/Filesystem/File';

class Settings {
  private directory: Directory;

  constructor(directory: Directory) {
    this.directory = directory;
  }

  private blackList: string[] = [];

  public setBlackList = (...blackListNames: string[]) => {
    this.blackList = [...blackListNames];
  }

  public compose = (
    subSettingsName: string,
    compsitionComplete: (composedSettings: Settings[]) => void
  ) => (
    this.subSettings({
      subSettingsName,
      subSettingsReady: (subSettings: Settings) => compsitionComplete([
        this,
        subSettings
      ])
    })
  );

  subSettings = ({
    subSettingsName,
    subSettingsReady
  }: {
    subSettingsName: string;
    subSettingsReady: (subSettings: Settings) => void;
  }) => this.directory.directory({
    directoryName: subSettingsName,
    directoryReady: (directory) => subSettingsReady(
      new Settings(directory)
    )
  });

  files = (filesReady: (files: File[]) => void) => {
    this.directory.files(filesReady);
  }

  deploy = ({
    path,
    deploymentDone
  }: {
    path: string,
    deploymentDone: (deployedFiles: File[]) => void
  }) => {
    const newFiles: File[] = [];
    this.directory.files(
      files => (
        files.forEach(
          file => {
            if (this.blackList['includes'](file.name)) {
              newFiles.push(null);
              if (newFiles.length === files.length) {
                deploymentDone(newFiles);
              }
            }
            else {
              file.copy({
                newPath: `${path}/${file.name}`,
                fileCopied: (newFile) => {
                  newFiles.push(newFile);
                  if (newFiles.length === files.length) {
                    deploymentDone(newFiles);
                  }
                }
              })
            }
          }
        )
      )
    );
  }

}

export default Settings;
