declare class Sort {
    static by: <T extends {}>(key: keyof T) => (first: T, second: T) => 1 | -1 | 0;
}
export default Sort;
