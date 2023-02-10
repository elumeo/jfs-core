import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import definition from './App/Stateless/Style/Theme/Definition';
import { error, info, success, warning } from 'Constant/Color';

const DevelopColors: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography
              sx={{
                margin: definition.spacing(1),
                padding: definition.spacing(1),
                backgroundColor: info.main,
                color: definition.colorSchemes.light.palette.getContrastText(info.main)
              }}>Info</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{
              margin: definition.spacing(1),
              padding: definition.spacing(1),
              backgroundColor: error.main,
              color: definition.colorSchemes.light.palette.getContrastText(error.main)
            }}>Error</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{
              margin: definition.spacing(1),
              padding: definition.spacing(1),
              backgroundColor: warning.main,
              color: definition.colorSchemes.light.palette.getContrastText(warning.main)
            }}>Warning</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{
              margin: definition.spacing(1),
              padding: definition.spacing(1),
              backgroundColor: success.main,
              color: definition.colorSchemes.light.palette.getContrastText(success.main)
            }}>Success</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DevelopColors
