class Filter {
  static by = <T extends {}>({
    include,
    exclude
  }: {
    include: ((value: T) => boolean)[];
    exclude: ((value: T) => boolean)[];
  }) => (entry: T) => (
    include.reduce(
      (accept, filter) => accept || Boolean(filter(entry)),
      false
    ) === true &&
    exclude.reduce(
      (refuse, filter) => refuse || Boolean(filter(entry)),
      false
    ) === false
  )
}

export default Filter;
