import color from 'ansi-colors';
import File from "../File";
import Directory from "./index";

const formatMessagePrefix = (messagePrefix) => messagePrefix ? `${messagePrefix}: ` : '';

const handleNewDirectory = (targetPath, corePath, messagePrefix) => {
    const newDirectory = new Directory({ path: targetPath });
    newDirectory.create(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${color.greenBright(`+${corePath}`)}`);
    });
};

const handleNewFile = (sourcePath, targetPath, corePath, messagePrefix) => {
  const newFile = new File({ path: sourcePath });
  newFile.copy(
    targetPath,
    () => {
      console.log(`${formatMessagePrefix(messagePrefix)}${color.greenBright(`+${corePath}`)}`);
    }
  );
};

const handleRemoveFile = (targetPath, corePath, messagePrefix) => {
  const removedFile = new File({ path: targetPath });
  removedFile.remove(
    () => {
      console.log(`${formatMessagePrefix(messagePrefix)}${color.redBright(`-${corePath}`)}`);
    }
  );
};

const handleRemoveDirectory = (targetPath, corePath, messagePrefix) => {
    const removedDirectory = new Directory({ path: targetPath });
    removedDirectory.remove(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${color.redBright(`-${corePath}`)}`);
    });
};

const handleChange = ({ event, sourcePath, targetPath, corePath, messagePrefix }) => {
    switch (event) {
        case 'addDir': {
            handleNewDirectory(targetPath, corePath, messagePrefix);
            break;
        }
        case 'add':
        case 'change': {
            handleNewFile(sourcePath, targetPath, corePath, messagePrefix);
            break;
        }
        case 'unlink': {
            handleRemoveFile(targetPath, corePath, messagePrefix);
            break;
        }
        case 'unlinkDir': {
            handleRemoveDirectory(targetPath, corePath, messagePrefix);
        }
    }
};

export default handleChange;
