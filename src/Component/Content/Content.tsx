import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import { useIntl } from 'react-intl';


type ContentProps = {
  type: ContentType
  children: ContentProps['type'] extends 'component' ? React.ReactNode : string,
  translate?: ContentProps['type'] extends 'component' ? never : boolean,
};
export type ContentType = 'text' | 'component'
const Content: React.FC<ContentProps> = ({ children, type = 'component', translate, ...rest }) => {
  const { formatMessage } = useIntl();
  return type === 'component'
    ? <>{children}</>
    : <Typography {...rest}>{translate ? formatMessage({ id: children }) : children}</Typography>
};

export default Content;
