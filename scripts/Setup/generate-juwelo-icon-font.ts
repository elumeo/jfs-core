import JFS from 'Library/JFS';
import Location from 'Library/JFS/Environment/Location';

const nodeSass = require('node-sass')
const fs = require('fs')

const Fontagon = require('fontagon');

JFS.discover(() => {
  if (JFS.Environment.Location.type === Location.Type.LOCAL) {
    Fontagon({
      files: [
        __dirname + '/Resources/juwelo-icon-font/svg/*.svg'
      ],
      dist: __dirname + '/Resources/juwelo-icon-font/dist',
      fontName: 'juwelo-icon-font',
      style: 'sass',
      classOptions: {
        baseClass: 'juwelo-icon-font',
        classPrefix: 'jif',
        order: ['woff', 'woff2']
      }
    }).then((opts) => {
      nodeSass.render({
        file: __dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.sass',
        outFile: __dirname + '/Resources/juwelo-icon-font/scss/juwelo-icon-font.scss',
      }, (error, result) => { // node-style callback from v3.0.0 onwards
        if (error) {
          console.error(error); // used to be "code" in v2x and below
        } else {
          const pattern = '.*juwelo-icon-font\.eot.*';
          let cssLineSplit = result.css.toString().split(/\r?\n/);
          cssLineSplit = cssLineSplit.filter((line) => {
            const r = new RegExp(pattern);
            return r.exec(line) === null;
          });
          fs.writeFile(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.scss', cssLineSplit.join('\n'), (err) => {
            if (err) {
              return console.log(err);
            }
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.sass');
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.eot');
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.ttf');
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.svg');
            fs.copyFileSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.scss', __dirname + '/../src/Component/JuweloFontIcon/juwelo-icon-font.scss');
            fs.copyFileSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff', __dirname + '/../src/Component/JuweloFontIcon/juwelo-icon-font.woff');
            fs.copyFileSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff2', __dirname + '/../src/Component/JuweloFontIcon/juwelo-icon-font.woff2');
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.scss');
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff');
            fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff2');
            fs.rmdirSync(__dirname + '/Resources/juwelo-icon-font/dist');
            console.log('The file was saved!');
          });
        }
      });
    }).catch((err) => {
      console.error('fail! ', err)
    })
  }
});
