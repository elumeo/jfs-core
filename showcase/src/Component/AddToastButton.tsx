import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from 'react-md/lib/Buttons/Button';
import { addToastAction } from 'Core/Store/Action/ToastAction'
import { IToastConfig } from 'Core/Store/Reducer/Core/ToastReducer';

import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IAddToastButtonProps extends InjectedIntlProps {
  addToastAction?: (c: IToastConfig) => void;
}

class AddToastButton extends React.Component<IAddToastButtonProps> {
  render() {
    const { intl: { formatMessage } } = this.props;
    return (
      <Button
        flat
        onClick={() => this.props.addToastAction({ contentMessage: 'Hi, I\'ve been slide up here.' })}>
        {formatMessage({ id: 'Add Toast' })}
      </Button>
    );
  }
}

const enhance = compose(
  connect(null, { addToastAction }),
  injectIntl
);

export default enhance(AddToastButton);
