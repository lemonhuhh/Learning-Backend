import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productcard from "../components/reusable/Productcard";
import Herobanner from "../data/Heroslider";
import { useState, useEffect } from "react";
import hero from "../assets/hero.jpg";
import Heroslider from "../data/Heroslider";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

// function Home() {
//   const clothes = [
//     { id: 1,
//       name: "T-Shirt",
//       price: 1200,
//     },
//     { id: 2,
//       name: "Hoodie",
//       price: 2500,
//     },
//     { id: 3,
//       name: "Jeans",
//       price: 3000,
//     },
//     {
//       id: 4,
//       name: "Joggers",
//       price: 1800,
//     },
//     {
//       id: 5,
//       name: "Shirt",
//       price: 1500,
//     }
//   ];

//   return (
//     <div className="products">
//       <div className="product-box">
//       <h1>Our Products</h1>
//       {clothes.map((cloth) => (
//         <div key={cloth.id}>
//           <h2>{cloth.name}</h2>
//           <p>Price: ${cloth.price}</p>
//         </div>

//       ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

function Home() {
  // const [currentslide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   setCurrentSlide((currentslide + 1) % Herobanner.length);
  // };

  // const previousSlide = () => {
  //   setCurrentSlide((currentslide - 1 + Herobanner.length) % Herobanner.length);
  // };

  // const [liked, setLiked] = useState(false);

  // const handlelike =() =>{
  //   setLiked ((!liked ? true : false))
  // }
  const name = [
    {
      name: "Surajan",
      age: 25,
      role: "Teacher",
    },
    {
      name: "Prabin",
      age: 18,
      role: "Student",
    },
  ];
  localStorage.setItem("name", "Prabin");
  localStorage.setItem("age", 25);
  localStorage.setItem("Names", JSON.stringify(name));

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Herobanner.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Herobanner.length) % Herobanner.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Herobanner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = Herobanner[currentSlide];

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
              <a href="#" className="hero-btn primary">
                SHOP COLLECTION
                <span>→</span>
              </a>

              <a href="#" className="hero-btn secondary">
                EXPLORE NEW ARRIVALS
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-image">
                <img src={current.image} alt="Hero" />
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
      {/* <section>
        <div>
          {Herobanner.map((slide, index) => (
            <div
              key={Herobanner.id}
              style={{ display: index == currentslide ? "block" : "none" }}
            >
              <h2>{slide.id}</h2>
              <p>{slide.Title}</p>
              <p>{slide.Description}</p>
            </div>
          ))}
        </div>
        <div>
          <button onClick={previousSlide} className="primary-btn">
            Previous
          </button>
          <button onClick={nextSlide} className="primary-btn">
            Next
          </button> */}

      {/* <button onClick={handlelike}>Add to wishlist</button>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
