import { Layouts } from "./layout/Layouts";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Oder from "./pages/Oder";
import Login from "./pages/auth/Login";
import Admindashboard from "./pages/adminpages/Admindashboard";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminUser from "./pages/adminpages/AdminUser";
import AdminProduct from "./pages/adminpages/AdminProduct";
import ProductDetails from "./product/ProductDetails";
import Mycart from "./cart/Mycart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/oder" element={<Oder />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/mycart" element={<Mycart />} />
        </Route>

        {/* Fot Dashboard */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Admindashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="user"
            element={
              <ProtectedRoute>
                <AdminUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedRoute>
                <AdminProduct />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
