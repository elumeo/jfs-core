import useConfig from '../../Effect/useConfig';
const useCurrency = () => {
    const { Currency } = useConfig();
    return Currency;
};
export default useCurrency;
