import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CenteredAlert from "../../components/Alert";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [showAlert, setShowAlert] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    console.log(res);
    if (res.ok)
    {
      console.log('ok');
      setSuccess(true);
      setShowAlert(data.message);
    }
    else{
      setSuccess(false);
      setShowAlert(data.message || data.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Reset your password</h2>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Reset Password
        </button>
        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </form>
      {showAlert && (
        <CenteredAlert
          message={showAlert}
          onClose={() => {
            setShowAlert("");
            console.log(success);
            if (success) {
              navigate("/login");
            }
          }}
        />
      )}
    </div>
    
  );
}