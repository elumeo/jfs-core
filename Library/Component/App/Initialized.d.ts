import './Initialized.scss';
export interface IInitializedProps {
    language?: string;
    messages?: {
        [language: string]: {
            [key: string]: string;
        };
    };
    appInitialized?: boolean;
}
declare const _default: import("react-redux").ComponentClass<IInitializedProps>;
export default _default;
