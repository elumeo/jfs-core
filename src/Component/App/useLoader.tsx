import { useEffect } from 'react';
import useActions from 'Store/Action/useActions';
import { useSelector } from 'Types/Redux';
// import '@formatjs/intl-pluralrules/polyfill'
// import '@formatjs/intl-relativetimeformat/polyfill'
import { State } from 'Store/Reducer/Global';

const useLoader = ({ allowRobotLogin, packageJson, translations }: {
  allowRobotLogin: boolean;
  packageJson: object;
  translations: {
    [language: string]: {
      [key: string]: string;
    }
  }
}) => {
  const { initializeApp } = useActions();
  useEffect(
    () => {
      initializeApp({ allowRobotLogin, packageJson, translations });
      ['de', 'en', 'fr', 'it'].forEach(
        locale => {
        // require(`@formatjs/intl-pluralrules/locale-data/${locale}`)
        // require(`@formatjs/intl-relativetimeformat/locale-data/${locale}`)
      }
      );
    },
    []
  );
  return useSelector<{
    appInitialized: boolean;
    language: string;
  }>(
    state => ({
      appInitialized: state.Core.App.appInitialized,
      language: state.Core.Language.language
    })
  );
}

export default useLoader;
