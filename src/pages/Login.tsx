import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PasswordVerification() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => {
      console.log("Previous state:", prevState);
      const newState = !prevState;
      console.log("New state:", newState);
      return newState;
    });
  };

  const handleNext = () => {
    if (username === "admin" && password === "admin") {
      navigate("/rooms");
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 text-center bg-white shadow-lg rounded-xl">
        {/* Ícone de visibilidade da senha */}
        <div className="flex justify-center mb-4">
          <span className="text-6xl">{password ? '🙈' : '🙉'}</span>
        </div>

        <h2 className="text-xl font-bold">Login</h2>
        <p className="text-gray-500 text-sm mt-2">
          Please enter your credentials to continue.
        </p>

        <div className="mt-4">
          {/* Campo Username */}
          <div className="relative mb-4">
            <label
              htmlFor="username"
              className="text-left block text-gray-600 text-sm mb-1"
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

          {/* Campo Password */}
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="text-left block text-gray-600 text-sm mb-1"
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
              {/* Botão para alternar visibilidade da senha */}
              <button
                type="button"
                className="absolute right-3 text-gray-500"
                //onClick={() => setShowPassword(!showPassword)}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          {/* Botão NEXT */}
          <button
            onClick={handleNext}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
