import * as ANSI from 'ansi-colors';
import * as Description from './Description';
import * as Check from './Check';
import * as OpenAPI from "openapi-typescript-codegen";

export const run = async (
  path: string,
  options?: {
    namespace?: string;
    core?: boolean;
  }
) => {
  // const description = await Description.generate(path);
  // const result = await Check.run(path, description);
  if (true) {
    console.log([
      `API/JSC/Description.json did change.`,
      ANSI.bgRedBright(' --> Generating new API...')
    ].join('\n'));
    // const module = Code.generate(description, {
    //   moduleName: (options || {}).namespace || 'JSCApi',
    //   context: (options || {}).core && 'core' || 'app'
    // });

    // console.log({ description })
    // await Description.save(path, description)
    await OpenAPI.generate({
      input: "http://api.jsc-app.book/openapi/description?filter=services:ServiceProxy",
      //input: "./src/API/JSC/Description.json",
      output: './src/API/JSC/generated'
    });
    // await Code.cleanup(path)
    // await Code.save(path, [module])
  }
  else {
    console.log([
      `API/JSC/Description.json did not change.`,
      ANSI.bgGreenBright(' --> Nothing to be done here.')
    ].join('\n'));
  }
}
