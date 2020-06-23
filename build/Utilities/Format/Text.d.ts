declare class Text {
    static capitalize: (value: string) => string;
    static beginsWith: (text: string, ...prefixes: string[]) => boolean;
    static endsWith: (text: string, ...suffixes: string[]) => boolean;
}
export default Text;
