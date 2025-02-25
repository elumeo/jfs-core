import { ThemeVariant } from "Types/ThemeVariant.type";
import * as UserConfig from "../API/LOCAL_STORAGE/UserConfig";
import useSelector from "Store/useSelector";
import * as Selector from "Store/Selector";

export default (): ThemeVariant => {
  const userId = useSelector(Selector.Session.pickUsername);
  const themeVariant = useSelector((state) => state.Core.LocalStorage?.[[userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR) as ThemeVariant] ?? ThemeVariant.AUTO_DETECT);
  return themeVariant as ThemeVariant;
};
