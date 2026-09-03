import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const footernav = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/About",
    },
    {
      name: "Collection",
      to: "/Collection",
    },
    {
      name: "Contact",
      to: "/Contact",
    },
  ];

  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      name: "Instragram",
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <h2>Yeti Wear</h2>
              <p>Building clean, modern and responsive web experiences.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              {footernav.map((nav) => (
                <div
                  key={nav.name}
                  onClick={() => navigate(nav.to)}
                  className="links"
                >
                  {nav.name}
                </div>
              ))}

              <div>
                {socials.map((nav) => (
                  <a key={nav.name} href={nav.link}>
                    {nav.name}
                  </a>
                ))}
              </div>
              {/* <h3>Quick Links</h3>
              <a href="/">Home</a>
              <a href="/About">About</a>
              <a href="/Collection">Collection</a>
              <a href="/Contact">Contact</a>
            </div>
            <div className="footer-social">
              <h3>Connect</h3>
               */}
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Yeti Wear. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
