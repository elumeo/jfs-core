import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import React from 'react';
import HelloWorld from './HelloWorld';

test('Pixels match', async () => {
  render(<HelloWorld/>);
  expect(await generateImage()).toMatchImageSnapshot();
});