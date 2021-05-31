import * as MUI from '@material-ui/core';
import * as React from 'react'
import LoremIpsum from 'Mock/LoremIpsum.json';

export type Props = {
  lines: number;
};

const LoremIpsumText: React.FC<Props> = ({ lines }) => (
  <>
    {
      Array(Math.ceil(lines / 8)).fill(null).map(
        (_, index) => (
          <MUI.Typography key={'LoremIpsum' + index}>
            {(LoremIpsum as string[]).slice(index * 8, (index + 1) * 8)}
          </MUI.Typography>
        )
      )
    }
  </>
)

export default LoremIpsumText;
