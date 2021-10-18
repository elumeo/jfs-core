import { memo } from 'react';
import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import AppCardContentBase, { AppCardContentBaseProps } from './AppCardContentBase';

type StylePropsType = { theme: typeof Definition } & AppCardContentBaseProps;

const AppCardContent = styled<typeof AppCardContentBase>(AppCardContentBase)`
  flex-direction: column;
  height: ${({ theme, fullHeight = false, withSubtitle = false, overrideCardTitleHeight = null }: StylePropsType) => {
    if (overrideCardTitleHeight !== null) {
      return overrideCardTitleHeight;
    }
    const cardTitleHeight = withSubtitle ? theme.spacing(10) : theme.spacing(7);
    return fullHeight
      ? 'calc(100% - ' + cardTitleHeight + 'px)'
      : 'initial'
      ;
  }}
`;

export default memo(AppCardContent);
