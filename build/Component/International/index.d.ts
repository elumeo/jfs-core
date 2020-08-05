import React from 'react';
import { PrimitiveType } from 'intl-messageformat';
export declare type FormatMessage = (messageDescriptor: {
    id: string;
}, values?: Record<string, PrimitiveType> | undefined) => string;
interface IInternationalChildrenProps {
    formatMessage: FormatMessage;
}
interface IInternationalProps {
    children: (internationalChildrenProps: IInternationalChildrenProps) => JSX.Element;
}
declare const International: React.FC<IInternationalProps>;
export default International;
