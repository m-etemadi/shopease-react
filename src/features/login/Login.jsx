import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../login/authenticationSlice';

import Button from '../../ui/Common/Button/Button';

import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const destination = searchParams.get('destination');

  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );

  const [email, setEmail] = useState('john@ecommerce.com');
  const [password, setPassword] = useState('John1234');

  useEffect(
    function () {
      if (isAuthenticated) {
        destination
          ? navigate('/order/checkout', { replace: true })
          : navigate('/', { replace: true });
      }
    },
    [isAuthenticated, navigate, destination]
  );

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) dispatch(login(email, password));
  }

  return (
    <main className="p-5">
      <div className="container">
        <h2 className="heading-primary">Login</h2>
        <div className={styles.login}>
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <Button type="primary">Continue</Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
