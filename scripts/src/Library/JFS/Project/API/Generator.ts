import * as ANSI from 'ansi-colors';
import * as Description from './Description';
import * as Code from './Code';
import * as Check from './Check';

export const run = async (
  path: string,
  options?: {
    namespace?: string;
    core?: boolean;
  }
) => {
  const description = await Description.generate(path);
  const result = await Check.run(path, description);
  if (result) {
    console.log([
      `API/JSC/Description.json did change.\n`,
      ANSI.bgRedBright(' --> Generating new API...')
    ].join(''));
    const code = Code.generate(description, {
      namespace: (options || {}).namespace || 'JSCApi',
      core: (options || {}).core || false
    });

    Description.save(path, description);
    Code.save(path, code);
  }
  else {
    console.log([
      `API/JSC/Description.json did not change.\n`,
      ANSI.bgGreenBright(' --> Nothing to be done here.')
    ].join(''));
  }
}