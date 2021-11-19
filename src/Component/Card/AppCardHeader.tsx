import { memo } from 'react';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import styled from 'styled-components';
import AppCardHeaderBase, { AppCardHeaderBaseProps } from 'Component/Card/AppCardHeaderBase';

type StylePropsType = { theme: typeof Definition } & AppCardHeaderBaseProps;

const AppCardHeader = styled<typeof AppCardHeaderBase>(AppCardHeaderBase)`
  position: relative;
  align-items: flex-start;

  .MuiLinearProgress-root {
    position: absolute;
    width: ${(props: StylePropsType) => 'calc(100% + ' + props.theme.spacing(4) + 'px);'};
    top: 0;
    left: ${(props: StylePropsType) => (props.theme.spacing(2) * -1) + 'px;'};
  }

  .MuiIconButton-root {
    /*vertical-align: ${(props: StylePropsType) => (props.theme.spacing(0.5) * -1) + 'px;'};*/
    padding: ${(props: StylePropsType) => props.theme.spacing(0.25) + 'px;'};
  }
`;

export default memo(AppCardHeader);
