const { resolve } = require('path');
const fs = require('fs');

module.exports = () => {
  const noLocalFound = !fs.existsSync(resolve('local.js'));
  const hasDistFile = fs.existsSync(resolve('local.js.dist'));

  if (noLocalFound && hasDistFile) {
    fs.writeFileSync(
      resolve('local.js'),
      fs.readFileSync(resolve('local.js.dist')).toString(),
      (error) => {
        if (error) {
          throw error;
        }
      }
    );
  }
}
