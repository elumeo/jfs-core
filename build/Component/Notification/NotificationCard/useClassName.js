const useClassName = ({ error, isSuccess, isWarning, isError, onClick }) => {
    const errorClass = isError || error ? 'error' : '';
    const warningClass = isWarning ? 'warning' : '';
    const successClass = isSuccess ? 'success' : '';
    const clickClass = onClick ? 'clickable' : '';
    if ([errorClass, warningClass, successClass].filter(c => !!c).length > 1) {
        throw new Error('isError|error, isWarning and isSuccess cannot be combined');
    }
    return [
        `md-cell`, `md-cell--12`,
        `badges__notifications__notification`,
        successClass, warningClass, errorClass, clickClass
    ].join(' ');
};
export default useClassName;
//# sourceMappingURL=useClassName.js.map