// frontend/src/components/LoginFormModal/LoginFormModal.jsx

import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  // const [disabled, setDisabled] = useState(true);
  const { closeModal } = useModal();


const isDisabled = !credential ||
!password ||
 credential.length < 4 ||
  password.length < 6;


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const loginDemo = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({
        credential: 'demo@user.io',
        password: 'password'
    }))
    .then(closeModal)
    .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
            setErrors(data.errors);
        }
    });
};







  return (

    <div className='login-container'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label id='login'>

          <input className='input'
            placeholder='Username or Email'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label id='password'>

          <input className='input'
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && (
          <p>{errors.credential}</p>
        )}
        <button type="submit"
        disabled={isDisabled}
        >
          Log In
        </button>

        <a
        className='demo-log-in'
        onClick={loginDemo}
        >
          Demo User
        </a>
      </form>
    </div>


  );
}

export default LoginFormModal;
