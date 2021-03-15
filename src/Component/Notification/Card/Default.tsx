import React from 'react';
import * as MUI from '@material-ui/core';
import { useTheme } from '@material-ui/core';
// import { useIntl,  } from 'react-intl';

export type Props =  {
    id: string;
    title: React.ReactNode,
    subtitle: React.ReactNode,
    content: React.ReactNode,
    actions: React.ReactNode,
    translate?: boolean;
}

const DefaultNotificationCard : React.FC<Props> = ({
    id,
    title,
    subtitle,
    content,
    actions,
    translate
}) => {
    // const {formatMessage} = useIntl()
    
    return <>
        <MUI.CardContent color='inherit'>
            <MUI.Typography variant='subtitle1'>
                {title}
            </MUI.Typography>
            <MUI.Typography variant='subtitle2'>
                {subtitle}
            </MUI.Typography>
            <MUI.Typography variant='caption'>
                {content}
            </MUI.Typography>
        </MUI.CardContent>
        <MUI.CardActions>
            {actions}
        </MUI.CardActions>
    </>
}
export default DefaultNotificationCard