import React from 'react';
import Username from './Username';
import Password from './Password';

export type Credentials = {
  username: string;
  password: string;
}

export type Props = {
  value: Credentials;
  onChange: (next: Credentials) => void;
  onSubmit: () => void;
  error: boolean;
};

const LoginCredentials: React.FC<Props> = ({
  value, onChange, onSubmit, error
}) => {
  const username = React.useRef<HTMLInputElement>();
  const password = React.useRef<HTMLInputElement>();

  React.useEffect(
    () => {
      if (username.current) {
        username.current.focus();
      }
    },
    [username.current]
  );

  return (
    <form autoCorrect='false' autoComplete='off' style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 130,
      width: 300,
      boxSizing: 'border-box',
      paddingLeft: 24,
      paddingRight: 24,
      marginTop: 6,
      marginBottom: 32
    }}>
      <Username
        ref={username}
        value={value.username}
        onChange={next => onChange({
          ...value,
          username: next
        })}
        error={error}
        onEnter={() => password.current.focus()}/>
      <Password
        ref={password}
        value={value.password}
        onChange={next => onChange({
          ...value,
          password: next
        })}
        error={error}
        onEnter={onSubmit}/>
    </form>
  )
};

export default LoginCredentials;
