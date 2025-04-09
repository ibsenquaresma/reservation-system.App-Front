import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredAlert from '../../components/Alert';
import bgImage from '../../img/bg.jpg';
import styles from '../../style/login.module.css'

export default function PasswordVerification() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleNext = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token); // salva JWT
        navigate('/home');
      } else {
        setShowAlert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowAlert('Something went wrong!');
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-96 p-6 text-center bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/30">
        <div className="flex justify-center mb-4">
          <span className="text-6xl">{password ? '🙈' : '🙉'}</span>
        </div>

        <h2 className={styles.login__title}>Login</h2>
        <p className={styles.login__mini__title}>
          Please enter your credentials to continue.
        </p>

        <div className="mt-4">
        <div className="login__group">
          {/* Username */}
          <div className="relative mb-4">
            <label
              htmlFor="username"
              className={styles.login__label}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className={styles.login__label}
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>
          </div>
          {/* Botão NEXT */}
          <button
            onClick={handleNext}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            NEXT
          </button>

          {/* Links extras */}
          <div className="mt-4 text-sm text-white">
            <a
              href="#"
              className={styles.login__forgot}
              // className="text-blue-200 hover:underline"
              onClick={() => navigate('/forgot')}
            >
              Forgot password?
            </a>
            <div className={styles.login__register}>
              Don’t have an account?{' '}
              <a
                href="#"
                className={styles.login__register}
                onClick={() => navigate('/register')}
              >
                Register
              </a>
            </div>
          </div>
        </div>
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
