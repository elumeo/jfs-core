class Sort {
}
Sort.by = (key) => (first, second) => {
    if (first[key] > second[key]) {
        return 1;
    }
    else if (first[key] < second[0]) {
        return -1;
    }
    else {
        return 0;
    }
};
export default Sort;
//# sourceMappingURL=Sort.js.map