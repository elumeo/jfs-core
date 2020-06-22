import JFS from 'Library/JFS';
import Core from 'Library/JFS/Core';

JFS.discover(() => {
  JFS.Head.JSC.generate(
    JFS.Head,
    { core: JFS.Head instanceof Core }
  );
});
