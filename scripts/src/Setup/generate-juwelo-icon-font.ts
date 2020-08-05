import JFS from 'Library/JFS';
import Core from 'Library/JFS/Core';
import { default as Fontagon } from 'fontagon'
import * as NodeSass from 'node-sass';
import fs from 'fs';
import { resolve } from 'path';

JFS.discover(
  () => {
    if (JFS.Head instanceof Core) {
      const resources = resolve(JFS.Head.path, 'scripts', 'Resources');
      const scss = resolve(resources, 'juwelo-icon-font', 'scss')
      const dist = resolve(resources, 'juwelo-icon-font', 'dist');
      const target = resolve(
        JFS.Head.path, 'src', 'Component', 'JuweloFontIcon'
      );

      Fontagon({
        files: [
          resolve(resources, 'juwelo-icon-font', 'svg', '*.svg')
        ],
        dist,
        fontName: 'juwelo-icon-font',
        style: 'sass',
        classOptions: {
          baseClass: 'juwelo-icon-font',
          classPrefix: 'jif',
          order: ['woff', 'woff2']
        }
      }).then(opts => {
        NodeSass.render(
          {
            file: resolve(dist, 'juwelo-icon-font.sass'),
            outFile: resolve(scss, 'juwelo-icon-font.scss'),
          },
          (error, result) => { // node-style callback from v3.0.0 onwards
            if (error) {
              console.error(error); // used to be "code" in v2x and below
            } else {
              let cssLineSplit = result.css.toString().split(/\r?\n/);
              const r = new RegExp('.*juwelo-icon-font\.eot.*');
              cssLineSplit = cssLineSplit.filter(line => r.exec(line) === null);
              fs.writeFile(
                resolve(dist, 'juwelo-icon-font.scss'),
                cssLineSplit.join('\n'),
                (err) => {
                  if (err) {
                    return console.log(err);
                  }

                  ['sass', 'eot', 'ttf', 'svg'].forEach(
                    suffix => fs.unlinkSync(
                      resolve(dist, `juwelo-icon-font.${suffix}`)
                    )
                  );

                  ['scss', 'woff', 'woff2'].forEach(
                    suffix => {
                      fs.copyFileSync(
                        resolve(dist, `juwelo-icon-font.${suffix}`),
                        resolve(target, `juwelo-icon-font.${suffix}`)
                      );
                      fs.unlinkSync(resolve(dist, `juwelo-icon-font.${suffix}`));
                    }
                  );

                  fs.rmdirSync(dist);
                  console.log('The file was saved!');
                }
              );
            }
          }
        );
      }).catch(err => console.error('fail! ', err))
    }
  }
);
