import React from 'react';
import Helmet from 'react-helmet';

export type Props = {
  value: string;
};

const Title: React.FC<Props> = ({ value }) => (
  <Helmet>
    <title>{value}</title>
  </Helmet>
);

export default Title;