import React, { useState, useEffect } from "react";
import Productcard from "../components/reusable/Productcard.jsx";
import axios from "axios";
import API_URL from "../api/api.js";

function Home() {
  const [products, setProducts] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`);
        setProducts(res.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    const getHeroes = async () => {
      try {
        const response = await axios.get(`${API_URL}/hero`);
        setHeroes(response.data);
      } catch (error) {
        console.error("Failed to fetch hero slides:", error);
      }
    };

    getProducts();
    getHeroes();
  }, []);

  useEffect(() => {
    if (heroes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroes.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  if (heroes.length === 0) {
    return (
      <div className="home">
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <p>Loading...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const current = heroes[currentSlide];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">{current.tag}</span>

            <h1>
              {current.title1}
              <span> {current.title2} </span>
              {current.title3}
            </h1>

            <p>{current.description}</p>

            <div className="hero-actions">
              <a href={current.button1Link || "#"} className="hero-btn primary">
                {current.button1Text || "SHOP COLLECTION"}
                <span>→</span>
              </a>

              <a
                href={current.button2Link || "#"}
                className="hero-btn secondary"
              >
                {current.button2Text || "EXPLORE NEW ARRIVALS"}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-image">
                <img src={current.image} alt={current.title2 || "Hero"} />
              </div>
            </div>

            <div className="hero-slider-controls">
              <button className="primary-btn" onClick={previousSlide}>
                ←
              </button>

              <button className="primary-btn" onClick={nextSlide}>
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10 lg:px-16 bg-white">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col items-center text-center">
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#184a7c]"></span>

              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#4e91d4]">
                Yeti Wear
              </span>

              <span className="w-10 h-px bg-[#184a7c]"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#184a7c]">
              Our Products
            </h2>

            {/* Description */}
            <p className="max-w-2xl mt-4 text-sm md:text-base leading-7 text-[#687789]">
              Discover our latest collection of carefully selected pieces,
              designed to bring comfort, style, and confidence to your everyday
              look.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="max-w-7xl mx-auto">
          <Productcard products={products} />
        </div>
      </section>
    </div>
  );
}

export default Home;
