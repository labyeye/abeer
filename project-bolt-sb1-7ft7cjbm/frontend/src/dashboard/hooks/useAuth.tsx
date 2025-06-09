import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    try {
      const { data } = await axios.post(
        "https://abeer.onrender.com/api/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", data.token);
      setToken(data.token);
      axios.defaults.headers.common["x-auth-token"] = data.token;

      return { success: true };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    delete axios.defaults.headers.common["x-auth-token"];
    navigate("/login");
  };

  const isAuthenticated = !!token;

  return { login, logout, isAuthenticated };
};
