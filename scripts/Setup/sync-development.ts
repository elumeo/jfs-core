import JFS from 'Library/JFS';
import Location from 'Library/JFS/Environment/Location';

JFS.discover(() => {
  if (JFS.Environment.Location.type === Location.Type.REMOTE) {
    JFS.Environment.Head.synchronize(
      'src',
      'settings',
      'scripts'
    );
  }
});
