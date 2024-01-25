/// <reference types="react" />
declare const Row: {
    NoResults: import("react").FC<{}>;
    Footer: import("react").ForwardRefExoticComponent<{
        isLoading: boolean;
    } & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLTableSectionElement>>;
};
export default Row;
