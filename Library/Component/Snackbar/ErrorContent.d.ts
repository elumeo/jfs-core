import React from 'react';
import './Style.scss';
import { AxiosError } from 'axios';
export declare const errorText: ({ response, config, message, name, stack }: {
    response: any;
    config: any;
    message: any;
    name: any;
    stack: any;
}) => {
    head: any;
    body: any;
};
export interface IErrorContentProps {
    contentError: Error | AxiosError | any;
}
declare const errorContent: React.FC<IErrorContentProps>;
export default errorContent;
