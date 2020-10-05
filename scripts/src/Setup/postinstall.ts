import JFS from 'Library/JFS';
import Script from 'Library/JFS/Core/Script';
import Process from 'Library/OS/Process';

export default new Script({
  path: __filename,
  name: 'jfs-postinstall',
  scope: ['all'],
  run: () => JFS.discover(async () => {
    await JFS.Head.addRegisterScripts(JFS.Core);
    await JFS.Head.registerScripts();
    await JFS.Head.deployConfigFiles();
    await JFS.Head.setPeerDependencies();

    const parent = await JFS.Head.parent();
    if (parent) {
      parent.addPostinstallScript(JFS.Core);
      const propagation = new Process({
        command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
        parameters: ['run', 'jfs-postinstall'],
        options: {
          cwd: parent.path,
          stdio: 'inherit'
        }
      });
      propagation.run();
    }
  })
});
