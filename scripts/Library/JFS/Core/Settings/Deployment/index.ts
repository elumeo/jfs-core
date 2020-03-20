import color from 'ansi-colors';
import File from 'Library/OS/Filesystem/File';
import Settings from "..";

interface IDeployment {
  path: string;
  settings: Settings[];
  onComplete: (deployedSettings: File[]) => void;
}

class Deployment {

  constructor({ path, settings, onComplete }: IDeployment) {
    const totalDeployedFiles: File[][] = [];
    settings.forEach(
      setting => setting.deploy({
        path,
        deploymentDone: (deployedFiles: File[]) => {
          totalDeployedFiles.push(deployedFiles);
          if (settings.length === totalDeployedFiles.length) {
            onComplete(
              totalDeployedFiles.reduce(
                (allDeployedFiles, deployedFiles) => [
                  ...allDeployedFiles,
                  ...deployedFiles
                ],
                []
              )
            );
          }
        }
      })
    );
  }

  static notify = (deployedFiles: File[]) => {
    const title = (message: string) => color.greenBright(`${message}\n`);
    const listEntry = (entry: string) => color.greenBright(`-- ${entry}`);

    console.log(title('Deployed config files'));
    deployedFiles
      .forEach(({ name }) => console.log(listEntry(name)));
  }

}

export default Deployment;
