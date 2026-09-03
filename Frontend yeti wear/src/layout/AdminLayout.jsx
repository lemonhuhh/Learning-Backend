import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

function AdminLayout() {
  return (
    <>
    <AdminHeader/>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 p-5">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
