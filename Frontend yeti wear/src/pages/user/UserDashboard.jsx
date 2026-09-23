import React from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  const stats = [
    {
      title: "Total Orders",
      value: "0",
    },
    {
      title: "Pending Orders",
      value: "0",
    },
    {
      title: "Wishlist",
      value: "0",
    },
    {
      title: "Cart Items",
      value: "0",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome */}
      <section>
        <h1 className="text-3xl font-bold">Welcome to Yeti Wear</h1>

        <p className="text-gray-400 mt-2">
          Manage your orders, wishlist, profile and shopping cart.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            to="/user/orders"
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-[#172033] transition"
          >
            <h3 className="font-semibold text-lg">View Orders</h3>

            <p className="text-sm text-gray-500 mt-2">
              Check your recent and previous orders.
            </p>
          </Link>

          <Link
            to="/user/wishlist"
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-[#172033] transition"
          >

            <h3 className="font-semibold text-lg">Wishlist</h3>

            <p className="text-sm text-gray-500 mt-2">
              View products you saved for later.
            </p>
          </Link>

          <Link
            to="/user/profile"
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-[#172033] transition"
          >
            <h3 className="font-semibold text-lg">Edit Profile</h3>

            <p className="text-sm text-gray-500 mt-2">
              Update your personal information.
            </p>
          </Link>
        </div>
      </section>

      {/* Recent Orders */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Orders</h2>

          <Link
            to="/user/orders"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            View All
          </Link>
        </div>

        <div className="bg-[#111827] border border-white/10 rounded-2xl p-10 text-center">
          <h3 className="font-medium">No orders yet</h3>

          <p className="text-sm text-gray-500 mt-2">
            Your recent orders will appear here.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
