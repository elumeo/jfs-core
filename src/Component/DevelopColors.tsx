import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useTheme } from '@material-ui/core/styles';

const DevelopColors: React.FC = () => {
  const theme = useTheme();
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography
              style={{
                margin: theme.spacing(1),
                padding: theme.spacing(1),
                backgroundColor: theme.palette.info.main,
                color: theme.palette.getContrastText(theme.palette.info.main)
              }}>Info</Typography>
          </Grid>
          <Grid item>
            <Typography style={{
              margin: theme.spacing(1),
              padding: theme.spacing(1),
              backgroundColor: theme.palette.error.main,
              color: theme.palette.getContrastText(theme.palette.error.main)
            }}>Error</Typography>
          </Grid>
          <Grid item>
            <Typography style={{
              margin: theme.spacing(1),
              padding: theme.spacing(1),
              backgroundColor: theme.palette.warning.main,
              color: theme.palette.getContrastText(theme.palette.warning.main)
            }}>Warning</Typography>
          </Grid>
          <Grid item>
            <Typography style={{
              margin: theme.spacing(1),
              padding: theme.spacing(1),
              backgroundColor: theme.palette.success.main,
              color: theme.palette.getContrastText(theme.palette.success.main)
            }}>Success</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default React.memo(DevelopColors)
