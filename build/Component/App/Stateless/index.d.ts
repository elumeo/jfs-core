import React from 'react';
import Style from './Style';
export declare type Props = {
    locale: string;
    messages: Record<string, string>;
};
declare const Stateless: React.FC<React.PropsWithChildren<Props>> & {
    Style: typeof Style;
};
export default Stateless;
