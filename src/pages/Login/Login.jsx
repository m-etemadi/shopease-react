import { useEffect } from 'react';
import { useAuth } from '../../contexts/FakeAuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
    <section className="p-5">
      <div className="container">
        <h2 className="page-title">Login</h2>
        <div className="login">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default Login;
