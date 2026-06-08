import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuthStore } from "../context/AuthContext";
import type { LoginResponse } from "../types/auth";

const Login = () => {
  const navigate = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response: LoginResponse = await loginUser({
        username,
        password,
      });

      setToken(response.access_token);
      navigate("/");
    } catch (error: unknown) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-96 p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
