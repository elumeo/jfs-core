class Filter {
}
Filter.by = ({ include, exclude }) => (entry) => (include.reduce((accept, filter) => accept || Boolean(filter(entry)), false) === true &&
    exclude.reduce((refuse, filter) => refuse || Boolean(filter(entry)), false) === false);
export default Filter;
//# sourceMappingURL=Filter.js.map