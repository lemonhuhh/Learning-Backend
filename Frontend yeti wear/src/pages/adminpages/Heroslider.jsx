import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../api/api";

function Heroslider() {
  const [heroes, setHeroes] = useState([]);

  const [formData, setFormData] = useState({
    tag: "",
    title1: "",
    title2: "",
    title3: "",
    description: "",
    image: "",
    button1Text: "",
    button1Link: "",
    button2Text: "",
    button2Link: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // GET ALL HEROES
  // =========================
  const fetchHeroes = async () => {
    try {
      const response = await axios.get(`${API_URL}/hero`);

      console.log("Hero API Response:", response.data);

      // Handles different backend response formats
      const heroData =
        response.data?.heroes ||
        response.data?.hero ||
        response.data?.data ||
        response.data ||
        [];

      setHeroes(Array.isArray(heroData) ? heroData : []);
    } catch (error) {
      console.log("Error fetching heroes:", error);
      setHeroes([]);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // ADD HERO
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(`${API_URL}/hero`, formData);

      alert("Hero slider added successfully!");

      // Reset form
      setFormData({
        tag: "",
        title1: "",
        title2: "",
        title3: "",
        description: "",
        image: "",
        button1Text: "",
        button1Link: "",
        button2Text: "",
        button2Link: "",
      });

      // Refresh hero list
      fetchHeroes();
    } catch (error) {
      console.log("Error adding hero:", error);

      console.log("Backend error:", error.response?.data);

      alert(error.response?.data?.message || "Failed to add hero slider");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE HERO
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hero slider?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/hero/${id}`);

      alert("Hero slider deleted successfully!");

      fetchHeroes();
    } catch (error) {
      console.log("Error deleting hero:", error);

      alert(error.response?.data?.message || "Failed to delete hero slider");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F18] text-[#F5F7FA] p-6">
      {/* =========================
          PAGE HEADER
      ========================= */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Hero Slider</h1>

        <p className="text-[#8B98AA] mt-2">
          Add and manage the hero slides displayed on your website.
        </p>
      </div>

      {/* =========================
          ADD HERO FORM
      ========================= */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-6">Add New Hero Slide</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* IMAGE */}
          <div>
            <label className="block text-sm text-[#8B98AA] mb-2">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              required
            />
          </div>

          {/* TAG */}
          <div>
            <label className="block text-sm text-[#8B98AA] mb-2">Tag</label>

            <input
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              placeholder="Example: NEW COLLECTION"
              className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
            />
          </div>

          {/* TITLES */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Title 1
              </label>

              <input
                type="text"
                name="title1"
                value={formData.title1}
                onChange={handleChange}
                placeholder="Title 1"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Title 2
              </label>

              <input
                type="text"
                name="title2"
                value={formData.title2}
                onChange={handleChange}
                placeholder="Title 2"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Title 3
              </label>

              <input
                type="text"
                name="title3"
                value={formData.title3}
                onChange={handleChange}
                placeholder="Title 3"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm text-[#8B98AA] mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter hero description"
              rows="4"
              className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
            />
          </div>

          {/* BUTTON 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Button 1 Text
              </label>

              <input
                type="text"
                name="button1Text"
                value={formData.button1Text}
                onChange={handleChange}
                placeholder="Example: Shop Now"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Button 1 Link
              </label>

              <input
                type="text"
                name="button1Link"
                value={formData.button1Link}
                onChange={handleChange}
                placeholder="/collection"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>
          </div>

          {/* BUTTON 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Button 2 Text
              </label>

              <input
                type="text"
                name="button2Text"
                value={formData.button2Text}
                onChange={handleChange}
                placeholder="Example: Explore"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8B98AA] mb-2">
                Button 2 Link
              </label>

              <input
                type="text"
                name="button2Link"
                value={formData.button2Link}
                onChange={handleChange}
                placeholder="/about"
                className="w-full bg-[#172033] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#5CC8FF]"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#5CC8FF] text-[#0A0F18] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Hero Slide"}
          </button>
        </form>
      </div>

      {/* =========================
          EXISTING HEROES
      ========================= */}
      <div>
        <h2 className="text-xl font-semibold mb-5">Existing Hero Slides</h2>

        {heroes.length === 0 ? (
          <div className="bg-[#111827] border border-white/10 rounded-xl p-8 text-center text-[#8B98AA]">
            No hero slides found.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroes.map((hero) => (
              <div
                key={hero._id}
                className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* IMAGE */}
                {hero.image && (
                  <img
                    src={hero.image}
                    alt={hero.title1 || "Hero slide"}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* CONTENT */}
                <div className="p-5">
                  {/* TAG */}
                  {hero.tag && (
                    <p className="text-[#5CC8FF] text-sm mb-2">{hero.tag}</p>
                  )}

                  {/* TITLE */}
                  <h3 className="text-xl font-bold">
                    {hero.title1} {hero.title2} {hero.title3}
                  </h3>

                  {/* DESCRIPTION */}
                  {hero.description && (
                    <p className="text-[#8B98AA] text-sm mt-3 line-clamp-3">
                      {hero.description}
                    </p>
                  )}

                  {/* ACTIONS */}
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => handleDelete(hero._id)}
                      className="bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-lg hover:bg-red-500/20"
                    >
                      Delete
                    </button>

                    <button
                      className="bg-[#5CC8FF]/10 text-[#5CC8FF] border border-[#5CC8FF]/20 px-4 py-2 rounded-lg"
                      onClick={() =>
                        alert("Edit functionality will be added next.")
                      }
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Heroslider;
