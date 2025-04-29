import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../img/bg.jpg';
import CenteredAlert from '../../components/Alert';
import '../../style/Register.css';
import PasswordStrengthChecker from '../Login/PasswordStrengthChecker';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setShowAlert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowAlert("Registration successful!");
        navigate('/login');
      } else {
        setShowAlert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setShowAlert("Something went wrong during registration.");
    }
  };

  return (
    <div
      className="register-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">
          Fill in your details to register.
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-4 text-left">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <PasswordStrengthChecker
              password={password}
              confirmPassword={confirmPassword}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
            />
          
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="login-redirect">
          Already have an account?{' '}
          <span className="login-link" onClick={() => navigate('/login')}>
            Login
          </span>
        </p>
      </div>

      {showAlert && (
        <CenteredAlert
          message={showAlert}
          onClose={() => setShowAlert("")}
        />
      )}
    </div>
  );
}