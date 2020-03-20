import JFS from 'Library/JFS';
import Location from 'Library/JFS/Environment/Location';

JFS.discover(() => {
  if (JFS.Environment.Location.type === Location.Type.LOCAL) {
    JFS.Core.JSC.generate(
      JFS.Core.config,
      2,
      () => {}
    )
  }
  else if (JFS.Environment.Location.type === Location.Type.REMOTE) {
    JFS.Environment.Head.JSC.generate(
      JFS.Environment.Head.config,
      2,
      () => {}
    )
  }
});
