import React, { useState } from 'react';
import { Box, Grid, Paper, TextField } from '@material-ui/core';
import DatePicker from 'Component/DatePicker';

const Develop: React.FC = () => {
  const [simpleDatePickerValue, setSimpleDatePickerValue] = useState<Date>(null);
  const [demoTextFieldValue, setDemoTextFieldValue] = useState<string>('');

  return (
    <Box component={Paper} p={2}>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            value={demoTextFieldValue}
            onChange={event => setDemoTextFieldValue(event.target.value)}
            label={'Label'}
          />
        </Grid>
        <Grid item>
          <DatePicker
            required
            label={'Label'}
            helperText={'Format: dd.mm.yyyy'}
            errorText={'Das ist ein ErrorText'}
            onChange={date => setSimpleDatePickerValue(date as Date)}
            isClearable
            value={simpleDatePickerValue}
          />
        </Grid>
        <Grid item>
          <TextField
            value={demoTextFieldValue}
            onChange={event => setDemoTextFieldValue(event.target.value)}
            label={'Label'}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Develop;
