import { Configuration } from '../Store/Selector/Core/Configuration';
import { useSelector } from '../Types/Redux';
const useConfig = () => {
    return useSelector(Configuration);
};
export default useConfig;
