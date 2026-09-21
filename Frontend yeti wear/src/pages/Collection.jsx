import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../api/api.js";
import Productcard from "../components/reusable/Productcard.jsx";

function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(`${API_URL}/products`);

      setProducts(response.data.products || []);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.message || "Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-lg text-slate-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-950">
            Yeti Wear
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Our Collection
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500">
            Explore our latest collection and find something that fits your
            style.
          </p>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <Productcard products={products} />
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-slate-800">
              No products available
            </h2>

            <p className="mt-2 text-slate-500">
              Products will appear here once they are added.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Collection;
