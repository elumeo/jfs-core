import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import React from 'react';
import Stateless from 'Component/App/Stateless';
import HelloWorld from './HelloWorld';

test('Pixels match', async () => {
  render(
    <Stateless>
      <HelloWorld/>
    </Stateless>
  );
  expect(await generateImage())
    .toMatchImageSnapshot();
});