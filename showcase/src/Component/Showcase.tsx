import React from 'react';
import * as MUI from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import * as Action from 'Store/Action';
import Typography from './Typo';
import ListExample from './ListExample';
import ExampleCard from './ExampleCard';
const Showcase: React.FC = () => {
  const theme = useTheme()
  React.useEffect(
    () => { Action.parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6']) }, []);
  return (
    <MUI.Box
      gridGap={theme.spacing(1)}
      display='flex'
      // width='100%'
      flexDirection='row' >
      {/* <MUI.Box
        flexGrow={1}
        display='flex'
        flexDirection='column'
        gridGap={theme.spacing(1)}
        maxWidth='50%'
      > */}
      <Typography />
      <MUI.Box gridGap={theme.spacing(1)} flexGrow={1} display='flex' flexDirection='column' maxWidth='50%'>

        <ListExample />
        <ExampleCard />
      </MUI.Box>
      {/* </MUI.Box> */}
    </MUI.Box>
  );
}

export default Showcase;
