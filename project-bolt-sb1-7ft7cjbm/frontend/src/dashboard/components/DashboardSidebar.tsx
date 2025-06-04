import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const DashboardSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav className="p-4">
        <div className="mb-4">
          <button
            onClick={() => setIsHomeOpen(!isHomeOpen)}
            className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 font-medium"
          >
            <span>Home Page</span>
            <svg
              className={`w-4 h-4 transition-transform ${isHomeOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isHomeOpen && (
            <div className="mt-2 pl-4">
              <Link
                to="/dashboard"
                className="block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2"
              >
                Gallery
              </Link>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-4 px-4 py-2 text-left text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};