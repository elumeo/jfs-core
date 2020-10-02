import JFS from 'Library/JFS';
import App from 'Library/JFS/App';
import Script from 'Library/JFS/Core/Script';

const run = () => JFS.discover(() => {
  if (JFS.Head instanceof App) {
    console.log('jfs-build can not be run from an app');
  }
  else {
    JFS.Head.build(process.argv.slice(2)[0] === '--watch');
  }
});

export default new Script({
  path: __filename,
  name: 'build',
  scope: ['core', 'jfc'],
  run
});
