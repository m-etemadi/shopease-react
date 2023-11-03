import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/FakeAuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '../../components/common/Button';

function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('john@ecommerce.com');
  const [password, setPassword] = useState('John1234');

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination');

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

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

  return (
    <section className="p-5">
      <div className="container">
        <h2 className="page-title">Login</h2>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <Button className="btn">Login</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
