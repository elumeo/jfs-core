import React from 'react';
import _ from 'lodash';
import * as notistack from 'notistack';
import { useSelector } from '../../Types/Redux';
const Notistack = () => {
    const all = useSelector(state => state.Core.Notification.history);
    const [shown, setShown] = React.useState([]);
    const snackbar = notistack.useSnackbar();
    React.useEffect(() => {
        const missing = _.differenceBy(all, shown, 'id');
        missing.forEach(({ title, subtitle, content, id, action, variant }) => {
            const existing = [title, subtitle, content].filter(data => !!data).join(' - ');
            return snackbar.enqueueSnackbar(existing, Object.assign({ key: id, variant: variant }, (action
                ? { action: action(snackbar, id) }
                : {})));
        });
        setShown([...shown, ...missing]);
    }, [all]);
    return null;
};
export default Notistack;
//# sourceMappingURL=Notistack.js.map