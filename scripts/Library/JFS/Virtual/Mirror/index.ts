import Mirror from './Type';
import File from 'Library/OS/Filesystem/File';
import { sep } from 'path';
import Directory from 'Library/OS/Filesystem/Directory';

class Mirror {

  public readonly virtualFile: File;
  public readonly sourceFile: File;

  constructor({ sourceFile, virtualFile }: Mirror.Props) {
    this.sourceFile = sourceFile;
    this.virtualFile = virtualFile;
  }

  apply = () => {
    const { relativePath } = Array(
      Math.max(
        this.virtualFile.predecessors.length,
        this.sourceFile.predecessors.length
      )
    )
      .fill(null)
      .map(
        (_, index) => ({
          virtual: this.virtualFile.predecessors[index] || null,
          source: this.sourceFile.predecessors[index] || null
        })
      )
      .reduce(
        ({ relativePath, equal }, { virtual, source }) => {
          if (equal) {
            if (virtual !== source) {
              equal = !equal;
              return {
                relativePath: ['.', source].join(sep),
                equal
              }
            }
          }
          else {
            if (virtual) {
              return {
                relativePath: ['..', relativePath, source].join(sep),
                equal
              }
            }
            else {
              return {
                relativePath: [relativePath, source].join(sep),
                equal
              }
            }
          }
          return { relativePath, equal };
        },
        { relativePath: '', equal: true }
      );

    (new Directory({ path: this.virtualFile.parent })).create(
      () => this.sourceFile.read({
        dataReady: (data: string) => this.virtualFile.write({
          data: [
            `export * from '${File.removeExtension(relativePath)}';`,
            ...(
              data.includes('export default')
                ? [
                  `import d from '${File.removeExtension(relativePath)}';`,
                  `export default d;`
                ]
                : []
            )
          ].join('\n')
        })
      })
    );
  }

}

export default Mirror;
