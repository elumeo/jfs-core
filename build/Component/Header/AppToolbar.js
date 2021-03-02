import React, { useCallback } from 'react';
// import Toolbar from '@material-ui/core/Toolbars/Toolbar';
import './AppToolbar.scss';
import { useIntl } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from '../../Store/Action/useActions';
const AppToolbar = ({ LeftTools, MiddleTools, RightTools, variant = 'dense' }) => {
    const { formatMessage } = useIntl();
    const { openNavigation } = useActions();
    const openSettings = useCallback(() => {
        openNavigation();
    }, [openNavigation]);
    return (React.createElement(AppBar, { position: 'static', className: 'tools' },
        React.createElement(Toolbar, { disableGutters: true, variant: variant },
            React.createElement(IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openSettings },
                React.createElement(MenuIcon, null)),
            React.createElement(Typography, { variant: 'h6' }, formatMessage({ id: 'app.title' })),
            React.createElement("div", { className: 'tools__toolbar' },
                React.createElement("div", { className: 'left-tools' },
                    React.createElement(LeftTools, null)),
                React.createElement("div", { className: 'middle-tools' }, MiddleTools !== undefined && React.createElement(MiddleTools, null)),
                React.createElement("div", { className: 'right-tools' },
                    React.createElement(RightTools, null))))));
    // <AppBar
    //       title={formatMessage({id: 'app.title'})}
    //       nav={<NavigationButton iconName='menu'/>}
    //       colored
    //       fixed>
    //       <div className='tools'>
    //         <div className='left-tools md-btn--toolbar'>
    //           <LeftTools/>
    //         </div>
    //         <div className='middle-tools md-btn--toolbar'>
    //           {MiddleTools !== undefined && <MiddleTools/>}
    //         </div>
    //         <div className='right-tools md-btn--toolbar'>
    //           <RightTools/>
    //         </div>
    //       </div>
    //     </AppBar>
};
export default AppToolbar;
//# sourceMappingURL=AppToolbar.js.map