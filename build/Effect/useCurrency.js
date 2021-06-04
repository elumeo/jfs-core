import useConfig from './useConfig';
const useCurrency = () => {
    const { Currency } = useConfig();
    return Currency;
};
export default useCurrency;
