import React from "react";
import { NavLink } from "react-router-dom";

function UserSidebar({ onLogout }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/user",
    },
    {
      name: "My Orders",
      path: "/user/orders",
    },
    {
      name: "Wishlist",
      path: "/user/wishlist",
    },
    {
      name: "My Cart",
      path: "/user/cart",
    },
    {
      name: "Profile",
      path: "/user/profile",
    },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-[#111827] border-r border-white/10 flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          YETI <span className="text-cyan-400">WEAR</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 px-3 mb-4">
          My Account
        </p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <span className="text-lg w-6">{item.icon}</span>

            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition"
        >
          <span>↪</span>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default UserSidebar;
