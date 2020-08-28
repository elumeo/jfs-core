import JFS from 'Library/JFS';
import Core from 'Library/JFS/Core';

const message = {
  completed: () => (
    `Added peerDependencies to package.json of ${JFS.Head.directory.name}`
  )
};

JFS.discover(() => {

  if (!(JFS.Head instanceof Core)) {
    JFS.Core.nodePackage.json(({ dependencies }) => {
      JFS.Head.nodePackage.json(nodePackage => {
        JFS.Head.nodePackage.file.save(
          {
            ...nodePackage,
            peerDependencies: dependencies
          },
          () => console.log(message.completed)
        );
      });
    });
  }
});
