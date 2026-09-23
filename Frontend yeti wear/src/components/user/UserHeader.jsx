import React from "react";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/user") {
      return "Dashboard";
    }

    if (location.pathname.includes("/orders")) {
      return "My Orders";
    }

    if (location.pathname.includes("/wishlist")) {
      return "Wishlist";
    }

    if (location.pathname.includes("/cart")) {
      return "My Cart";
    }

    if (location.pathname.includes("/profile")) {
      return "My Profile";
    }

    if (location.pathname.includes("/addresses")) {
      return "My Addresses";
    }

    return "My Account";
  };

  return (
    <header className="h-20 bg-[#111827] border-b border-white/10 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold">{getPageTitle()}</h2>

        <p className="text-xs text-gray-500 mt-1">
          Manage your Yeti Wear account
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-white">Welcome Back</p>

          <p className="text-xs text-gray-500">Yeti Wear Customer</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-semibold">
          U
        </div>
      </div>
    </header>
  );
}

export default UserHeader;
