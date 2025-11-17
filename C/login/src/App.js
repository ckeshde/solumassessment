import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');

  // valid email and password
  const validUsers = [
    { email: "me@example.com", password: "Test@1234" }
  ];

  // Password validation 
  const isValidPassword = (pw) => {
    const lengthCheck = pw.length >= 8 && pw.length <= 16;
    const upperCheck = /[A-Z]/.test(pw);
    const lowerCheck = /[a-z]/.test(pw);
    const numberCheck = /[0-9]/.test(pw);
    const symbolCheck = /[^A-Za-z0-9]/.test(pw);

    return lengthCheck && upperCheck && lowerCheck && numberCheck && symbolCheck;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Email cannot be empty
    if (email.trim() === '') {
      setError('Email cannot be empty.');
      return;
    }

    // Check if email exists
    const user = validUsers.find((u) => u.email === email);

    if (!user) {
      setError('Email does not exist.');
      return;
    }

    // Validate password 
    if (!isValidPassword(password)) {
      setError(
        'Password must be 8–16 characters and include uppercase, lowercase, number, and symbol.'
      );
      return;
    }

    // Check if password matches 
    if (password !== user.password) {
      setError('Incorrect password.');
      return;
    }

    // Success Login
    setLoggedIn(true);
    setLoggedUser(email);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '350px', margin: '50px auto' }}>
      
      {loggedIn ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome, {loggedUser}!</h2>
          <button
            onClick={handleLogout}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#3fb11cff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '8px', margin: '6px 0' }}
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', margin: '6px 0' }}
              />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#3586ddff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
