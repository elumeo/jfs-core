import * as React from 'react'
import LoremIpsum from 'Mock/LoremIpsum.json';

export default ({ lines }) => (
  <>
    {
      Array(Math.ceil(lines / 8)).fill(null).map(
        (_, index) => (
          <p key={'LoremIpsum' + index}>
            {(LoremIpsum as string[]).slice(index * 8, (index + 1) * 8)}
          </p>
        )
      )
    }
  </>
);
