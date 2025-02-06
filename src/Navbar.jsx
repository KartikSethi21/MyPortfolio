

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerBg from "../assets/images/banner-bg.png";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full  text-white transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}
    style={{
      backgroundImage: `url(${bannerBg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
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
