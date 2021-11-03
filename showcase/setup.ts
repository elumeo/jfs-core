import "@testing-library/jest-dom/extend-expect";
// set up visual regression testing
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { setDefaultOptions } from "jsdom-screenshot";

// TravisCI and Linux OS require --no-sandbox to be able to run the tests
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-travis-ci
setDefaultOptions({
  launch: {
    args: (
      process.env.CI === "true"
        ? ["--no-sandbox"]
        : []
    ),
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  }
});

// give tests more time as taking screenshots takes a while
jest.setTimeout(10000);

expect.extend({ toMatchImageSnapshot });
