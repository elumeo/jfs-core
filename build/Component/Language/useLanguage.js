import { useSelector } from "../../Types/Redux";
import useActions from "../../Store/useActions";
const useLanguage = () => {
    const language = useSelector(state => (state.Core.Language.language ||
        state.Core.Configuration.config.Language));
    const { changeLanguageAction } = useActions();
    return {
        value: language,
        onChange: (next) => {
            changeLanguageAction(next);
        }
    };
};
export default useLanguage;
