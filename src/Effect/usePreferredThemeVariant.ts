import { ThemeVariant } from "Types/ThemeVariant.type";
import * as UserConfig from "../API/LOCAL_STORAGE/UserConfig";
import useSelector from "Store/useSelector";
import * as Selector from "Store/Selector";

export default (): ThemeVariant => {
  const userId = useSelector(Selector.Session.pickUsername);
  const defaultTheme = useSelector(state => state.Core.Configuration.config?.DefaultTheme ?? ThemeVariant.LIGHT);
  const themeVariant = useSelector((state) => state.Core.LocalStorage?.[[userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR) as ThemeVariant] ?? defaultTheme);
  return themeVariant as ThemeVariant;
};
