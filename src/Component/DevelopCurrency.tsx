import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { getCurrency } from 'Utilities/Format/Currency';
import List from '@mui/material/List';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

type Props = {}

const DevelopCurrency: React.FC<Props> =
  () => {
    // hooks and stuff ...
    return (
      <Card>
        <CardContent>
          <List>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100, true, true, true)'}>
                {getCurrency('EUR', 100, true, true, true)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100, true, true, false)'}>
                {getCurrency('EUR', 100, true, true, false)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.00, true, true, true)'}>
                {getCurrency('EUR', 100.00, true, true, true)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.00, true, true, false)'}>
                {getCurrency('EUR', 100.00, true, true, false)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.5, true, true, true)'}>
                {getCurrency('EUR', 100.5, true, true, true)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.5, true, true, false)'}>
                {getCurrency('EUR', 100.5, true, true, false)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.50, true, true, true)'}>
                {getCurrency('EUR', 100.50, true, true, true)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.50, true, true, false)'}>
                {getCurrency('EUR', 100.50, true, true, false)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.75, true, true, true)'}>
                {getCurrency('EUR', 100.75, true, true, true)}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText secondary={'getCurrency(\'EUR\', 100.75, true, true, false)'}>
                {getCurrency('EUR', 100.75, true, true, false)}
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    )
  }

export default DevelopCurrency
