import { useSelector } from 'react-redux';
const createUseSelector = () => (selector) => useSelector(selector);
export default createUseSelector;
