declare class Sort {
    static by: <T extends {}>(key: keyof T) => (first: T, second: T) => 0 | 1 | -1;
}
export default Sort;
