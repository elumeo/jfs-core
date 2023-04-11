import { Core } from 'Store/Selector/Core/Core';
import { useSelector } from 'Types/Redux';

const useCore = () => {
  return useSelector(Core);
};

export default useCore;
