import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../api/api";

function AdminProduct() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const productdatas = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/products`);
        setData(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        setError("Error fetching the data: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    productdatas();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0F18] p-8 text-white">
        <div className="flex h-64 items-center justify-center">
          <p className="animate-pulse text-[#8B98AA]">Loading products...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0F18] p-8 text-white">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-5">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0A0F18] p-6 text-white md:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-1 text-sm text-[#5CC8FF]">ADMIN PANEL</p>
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-1 text-sm text-[#8B98AA]">
          View all products in your store.
        </p>
      </div>
      {/* Products */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="font-medium">All Products</h2>
          <p className="mt-1 text-xs text-[#8B98AA]">
            {data.length} products found
          </p>
        </div>
        {data.length === 0 ? (
          <div className="flex h-48 items-center justify-center">
            <p className="text-[#8B98AA]">No products found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-[#8B98AA]">
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b border-white/5 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-5">
                      <h3 className="font-medium text-white">
                        {product.productName}
                      </h3>
                      <p className="mt-1 text-xs text-[#8B98AA]">
                        ID: {product._id}
                      </p>
                    </td>
                    <td className="max-w-md px-6 py-5">
                      <p className="text-sm text-[#8B98AA]">
                        {product.productDescription}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-medium text-[#5CC8FF]">
                        Rs. {product.productPrice.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
export default AdminProduct;
