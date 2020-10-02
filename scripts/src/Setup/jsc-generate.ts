import JFS from 'Library/JFS';
import Core from 'Library/JFS/Core';
import Script from 'Library/JFS/Core/Script';

const run = () => JFS.discover(() => {
  JFS.Head.JSC.generate(
    JFS.Head,
    { core: JFS.Head instanceof Core }
  );
});

export default new Script({
  path: __filename,
  name: 'jsc-generate',
  scope: ['all'],
  run
});
