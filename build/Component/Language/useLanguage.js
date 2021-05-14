import { useSelector } from "../../Types/Redux";
import { useCallback } from "react";
import useActions from "../../Store/useActions";
const useLanguage = () => {
    const language = useSelector(state => (state.Core.Language.language ||
        state.Core.Configuration.config.Language));
    const { changeLanguageAction } = useActions();
    const onChange = useCallback((next) => changeLanguageAction(next), [changeLanguageAction]);
    return {
        value: language,
        onChange
    };
};
export default useLanguage;
