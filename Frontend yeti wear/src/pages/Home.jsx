import React, { useState, useEffect } from "react";
import Productcard from "../components/reusable/Productcard";
import axios from "axios";
import API_URL from "../api/api.js";

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const response = await axios.get(`${API_URL}/hero`);
        setHeroes(response.data);
      } catch (error) {
        console.error("Failed to fetch hero slides:", error);
      }
    };

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

      <div>
        <h1 className="text-(--product-title)">Our products</h1>
      </div>

      <div>
        <Productcard />
      </div>
    </div>
  );
}

export default Home;
