import { useNavigate, Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import product from "../data/data";

function Header() {
  const navigate = useNavigate();
  const navbar = [
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

  const heronav = () => {};
  const handleWishlist = () => {
    navigate(``);
  };

  const handleProfile = () => {
    navigate(`/login`);
  };

  const handleCart = () => {
    navigate(`/mycart`);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" className="logo-badge">
              Yeti Wear
            </Link>
          </div>
          <div className="nav-links">
            {navbar.map((nav) => (
              <li
                key={nav.name}
                onClick={() => navigate(nav.to)}
                className="links"
              >
                {nav.name}
              </li>
            ))}
          </div>
          <div className="header-icons">
            <FaRegHeart className="header-icon" />
            <AiOutlineShoppingCart
              className="header-icon"
              onClick={handleCart}
            />
            <FiUser className="header-icon" onClick={handleProfile} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
