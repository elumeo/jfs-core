import JFS from 'Library/JFS';
import Location from 'Library/JFS/Environment/Location';

JFS.discover(() => {
  const { Environment, Core } = JFS;
  const { Head } = Environment;
  
  if (Environment.Location.type === Location.Type.LOCAL) {
    Core.JSC.check(Core.config);
  }
  else if (Environment.Location.type === Location.Type.REMOTE) {
    Head.JSC.check(Head.config);
  }
});
