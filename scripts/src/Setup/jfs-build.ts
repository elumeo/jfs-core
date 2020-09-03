import JFS from 'Library/JFS';
import App from 'Library/JFS/App';

JFS.discover(() => {
  if (JFS.Head instanceof App) {
    console.log('jfs-build can not be run from an app');
  }
  else {
    JFS.Head.build(process.argv.slice(2)[0] === '--watch');
  }
});
