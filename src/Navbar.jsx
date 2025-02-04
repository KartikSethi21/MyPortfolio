import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false; // To prevent excessive re-renders

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar when scrolling up, hide when scrolling down
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50  bg-[url(../assets/images/banner-bg.png)] bg-no-repeat bg-cover w-full text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-[70px] flex justify-center items-center">
        <ul className="flex flex-row justify-evenly w-11/12">
          <li className="hover:cursor-pointer transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer transition-all duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:cursor-pointer transition-all duration-200">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:cursor-pointer transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

