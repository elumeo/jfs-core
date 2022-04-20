import React from 'react';
import Username from './Username';
import Password from './Password';
import * as Type from 'Types/Login';
import useAutoFocus from './useAutoFocus';
import Form from './Form';

export type Props = {
  value: Type.Credentials;
  onChange: (next: Type.Credentials) => void;
  onSubmit: () => void;
};

const Credentials: React.FC<Props> = ({ value, onChange, onSubmit }) => {
  const username = React.useRef<HTMLInputElement>();
  const password = React.useRef<HTMLInputElement>();
  useAutoFocus(username);

  return <Form>
    <Username
      ref={username}
      value={value.username}
      onChange={next => onChange({ ...value, username: next })}
      onEnter={() => password.current.focus()}
    />
    <Password
      ref={password}
      value={value.password}
      onChange={next => onChange({ ...value, password: next })}
      onEnter={onSubmit}
    />
  </Form>;
};

export default Credentials;
