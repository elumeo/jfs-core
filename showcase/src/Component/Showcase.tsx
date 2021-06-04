import React from 'react';
import * as MUI from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import * as Action from 'Store/Action';
import Typography from './Typo';
import PaperBox from './PaperBox';
import Example from './Example';
const Showcase: React.FC = () => {
  const theme = useTheme()
  React.useEffect(
    () => { Action.parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6']) }, []);
  return (
    <MUI.Box
      gridGap={theme.spacing(1)}
      display='flex'
      width='100%'
      flexDirection='row'>
      <Typography />
      <MUI.Box
        flexGrow={1}
        display='flex'
        flexDirection='column'
        gridGap={theme.spacing(1)}
        maxWidth='50%'
      >
        <PaperBox />
        <Example />
      </MUI.Box>
    </MUI.Box>
  );
}

export default Showcase;
