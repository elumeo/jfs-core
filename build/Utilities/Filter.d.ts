declare class Filter {
    static by: <T extends {}>({ include, exclude }: {
        include: ((value: T) => boolean)[];
        exclude: ((value: T) => boolean)[];
    }) => (entry: T) => boolean;
}
export default Filter;
