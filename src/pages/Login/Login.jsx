import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuth } from '../../contexts/FakeAuthContext';

import LoginForm from '../../components/Login/LoginForm';

function Login() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const destination = searchParams.get('destination');

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
    <main className="p-5">
      <div className="container">
        <div className="login">
          <h2 className="page-title">Login</h2>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default Login;
