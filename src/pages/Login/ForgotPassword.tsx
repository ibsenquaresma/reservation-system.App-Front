import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../img/bg.jpg';
import '../../style/Forgot.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleResend = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert('Instructions resent to your email.');
      } else {
        alert(data.message || 'Failed to resend instructions');
      }
    } catch (error) {
      console.error('Error during resend:', error);
      alert('Failed to resend instructions. Please try again.');
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-96 p-6 text-center bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/30">
        {!submitted ? (
          <>
            <h2 className="login__forgot__title">Forgot Password</h2>
            <p className="login__forgot__mini__title">
              Enter your email and we’ll send you instructions to reset your password.
            </p>
          </>
        ) : (
          <div className="text-green-900 space-y-4">
            <p>✅ Email sent! Check your inbox for instructions.</p>
            <button
              onClick={handleResend}
              className="login__register"
            >
              Resend instructions
            </button>
          </div>
        )}

        {!submitted && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="login__forgot__label">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              Send Instructions
            </button>
          </form>
        )}

        <div className="login__remembered">
          Remembered your password?{' '}
          <button
            onClick={() => navigate('/')}
            className="login__back"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}