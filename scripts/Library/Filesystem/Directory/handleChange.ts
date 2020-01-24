import File from "../File";
import Directory from "./index";


const handleNewDirectory = (targetPath, corePath) => {
    const newDirectory = new Directory({ path: targetPath });
    newDirectory.create(() => {
        console.log(`Created ${corePath}`);
    });
};

const handleNewFile = (sourcePath, targetPath, corePath) => {
    const newFile = new File({ path: sourcePath });
    newFile.copy({
        newPath: targetPath,
        fileCopied: () => {
            console.log(`Created/Updated ${corePath}`);
        }
    });
};

const handleRemoveFile = (targetPath, corePath) => {
    const removedFile = new File({ path: targetPath });
    removedFile.remove({
        fileRemoved: () => {
            console.log(`Removed ${corePath}`);
        }
    });
};

const handleRemoveDirectory = (targetPath, corePath) => {
    const removedDirectory = new Directory({ path: targetPath });
    removedDirectory.remove(() => {
        console.log(`Removed ${corePath}`);
    });
};

const handleChange = ({ event, sourcePath, targetPath, corePath }) => {
    switch (event) {
        case 'addDir': {
            handleNewDirectory(targetPath, corePath);
            break;
        }
        case 'add':
        case 'change': {
            handleNewFile(sourcePath, targetPath, corePath);
            break;
        }
        case 'unlink': {
            handleRemoveFile(targetPath, corePath);
            break;
        }
        case 'unlinkDir': {
            handleRemoveDirectory(targetPath, corePath);
        }
    }
};

export default handleChange;