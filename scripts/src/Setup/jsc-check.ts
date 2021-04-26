import Script from 'Library/JFS/Core/Script';
import * as Project from 'Library/JFS/Project';
import ANSI from 'ansi-colors';

export default new Script({
  path: __filename,
  name: 'jsc-check',
  run: async () => {
    const description = await Project.API.Description.generate(process.cwd());
    const difference = await Project.API.Check.run(process.cwd(), description);

    if (difference) {
      console.log(difference);
    }
    else {
      console.log(ANSI.bgGreenBright(' NO DIFFERENCE '))
    }
  },
  scope: ['all']
});
