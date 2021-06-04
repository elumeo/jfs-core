import { Configuration } from 'Store/Selector/Core/Configuration';
import { useSelector } from 'Types/Redux';
import useConfig from 'Effect/useConfig';


const useCurrency = () =>  {
    const {Currency} = useConfig()
    return Currency
}

export default useCurrency