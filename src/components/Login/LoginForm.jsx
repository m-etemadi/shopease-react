import { useState } from 'react';
import { useAuth } from '../../contexts/FakeAuthContext';

import Button from '../common/Button';

function LoginForm() {
  const { login } = useAuth();

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('john@ecommerce.com');
  const [password, setPassword] = useState('John1234');

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  return (
    <form onSubmit={handleLogin}>
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
  );
}

export default LoginForm;
