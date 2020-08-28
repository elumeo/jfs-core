class Sort {
  static by = <T extends {}>(key: keyof T) => (
    first: T,
    second: T
  ) => {
    if (first[key] > second[key]) {
      return 1;
    }
    else if (first[key] < second[0]) {
      return -1;
    }
    else {
      return 0;
    }
  }
}

export default Sort;
