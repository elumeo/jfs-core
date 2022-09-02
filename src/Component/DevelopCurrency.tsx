import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getCurrency } from 'Utilities/Format/Currency';
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

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
            yay
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

export default React.memo(DevelopCurrency)
