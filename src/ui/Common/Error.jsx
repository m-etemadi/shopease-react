import { useNavigate, useRouteError } from 'react-router-dom';

import Button from './Button/Button';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="message p-5">
      <h2>Something went wrong</h2>
      <p className="error">{error.data || error.message}</p>
      <Button type="primary" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export default Error;
