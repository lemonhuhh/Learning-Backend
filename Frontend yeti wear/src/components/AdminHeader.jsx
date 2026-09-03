import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-between p-4 border-b border-slate-200 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.15)] bg-white">
        <div className="text-2xl font-bold text-cyan-950">
          <Link to="/admin">Yeti Wear</Link>
        </div>
        <div>
          <button onClick={handleLogout} className="primary-btn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
