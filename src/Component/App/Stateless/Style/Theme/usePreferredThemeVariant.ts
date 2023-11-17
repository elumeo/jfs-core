import { ThemeVariant } from 'Types/ThemeVariant.type';
import * as UserConfig from './../../../../../API/LOCAL_STORAGE/UserConfig';
import { useSelector } from 'Types/Redux';

export default (): ThemeVariant => {
  const userId = useSelector(state => state.Core.Session?.sessionDTO?.username ?? '')
  const themeVariant = useSelector(state => state.Core.LocalStorage?.[[userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR) as ThemeVariant] ?? ThemeVariant.LIGHT)
  return themeVariant as ThemeVariant
}
