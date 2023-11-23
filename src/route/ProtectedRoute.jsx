import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(
    state => state.authentication.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/login');
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
