import React from 'react';
import * as MUI from '@material-ui/core';

export type Props = {
  actions?: JSX.Element[];
};

const Card: React.FC<Props> = ({ children, actions }) => {
  return (
    <MUI.Card style={{
      width: '100%',
      height: 70
    }}>
      {actions && (
        <MUI.CardActions>
          {actions}
        </MUI.CardActions>
      )}
      <MUI.CardContent>
        {children}
      </MUI.CardContent>
    </MUI.Card>
  );
}

export default Card;
