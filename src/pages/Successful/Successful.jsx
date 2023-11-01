import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

function Completed() {
  const navigate = useNavigate();

  return (
    <div className="completed">
      <p>Order Placed Successfully</p>
      <Button className="btn" onClick={() => navigate('/')}>
        Back to Home Page
      </Button>
    </div>
  );
}

export default Completed;
