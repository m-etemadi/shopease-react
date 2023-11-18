import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/cart');
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
