import React from 'react';
import { IntlConfig } from 'react-intl';
import Style from './Style';
export type Props = React.PropsWithChildren<IntlConfig>;
declare const Stateless: React.FC<React.PropsWithChildren<Props>> & {
    Style: typeof Style;
};
export default Stateless;
