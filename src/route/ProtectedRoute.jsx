import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/cart');
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
