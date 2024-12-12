import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false); // Nuevo estado para hover

  const reviewsList = [
    { title: "Oppenheimer", path: "/reviews/oppenheimer" },
    { title: "Barbie", path: "/reviews/barbie" },
    { title: "Poor Things", path: "/reviews/poor-things" },
    { title: "GoodFellas", path: "/reviews/goodfellas" },
    { title: "Venom: The Last Dance", path: "/reviews/venom-the-last-dance" },
    { title: "The Substance", path: "/reviews/the-substance" },
    { title: "Terrifier 3", path: "/reviews/terrifier-3" },
    { title: "The Wild Robot", path: "/reviews/the-wild-robot" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
          <nav className="navbar">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Film Camera Logo" />
              </Link>
            </div>
            <div
              className={`hamburger-menu ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <div className="things">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  Home
                </div>
              </Link>
              <div
                className="reviews-dropdown"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)} // Controla el hover
              >
                <Link to="/reviews" onClick={() => setMenuOpen(false)}>
                  <div className="things">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                    Reviews
                  </div>
                </Link>
                {hovered && ( // Mostrar contenido del menú solo si está en hover
                  <div className="dropdown-content">
                    <div className="dropdown-scroll">
                      {reviewsList.map((review) => (
                        <Link
                          key={review.path}
                          to={review.path}
                          onClick={() => setMenuOpen(false)}
                        >
                          {review.title}
                          <br />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <div className="things">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                  Contact
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
