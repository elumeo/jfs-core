import Snapshot from "./Snapshot";
import File from "Library/OS/Filesystem/File";
import { resolve } from "path";

class View {
  static html = (
    snapshot: Snapshot,
    onComplete: (html: string) => void
  ) => {
    onComplete(
      [
        `<table>`,
        ...snapshot.translations.table(snapshot.includeCompleteRows).map(
          (row, rowIndex) => [
            `<tr class=\\"${rowIndex ? 'value-row' : 'header-row'}\\">`,
            ...[
              'key',
              ...snapshot.translations.languages().map(language => language.name())
            ].map(
              (key, index) => (
                `<td class=\\"${index ? 'value-cell' : 'key-cell'}\\">${row[key]}</td>`
              )
            ),
            '</tr>'
          ].join('')
        ),
        `</table>`
      ].join('')
    );
  }

  public static render = (
    snapshot: Snapshot,
    onComplete: (html: string) => void
  ) => (
    View.html(
      snapshot,
      async html => Snapshot.renderer.renderPreview({
        scriptInjection: [
          `const htmlTable = \"${html}\";`,
          `const csvPath = \"${(await snapshot.file('csv')).path}\";`
        ].join(''),
        previewReady: onComplete
      })
    )

  );

  public static create = (
    version: number,
    snapshot: Snapshot,
    onComplete: () => void
  ) => View.render(
    snapshot,
    async html => {
      const htmlFile = new File({
        path: resolve(
          snapshot.subject.parent,
          [Snapshot.prefix, version.toString(), '.html'].join('')
        )
      });
      htmlFile.create(() => htmlFile.write(html, onComplete));
    }
  )

}

export default View;
