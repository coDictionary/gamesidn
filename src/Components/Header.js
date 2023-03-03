import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import logo from '../asset/gamesidn1.png'

const Header = () => {

  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 50);
  });

  return (
    <div className="w-full">
      <header
        className="flex w-full z-20 px-20 bg-gray-800 justify-center items-center"
        id="header"
      >
        <div className="content-header flex w-full py-8 bg-gray-800">
          <Link
            to={`/`}
            className="title flex gap-2 justify-center items-center"
          >
            <img src={logo} alt="logo" className="w-7 h-8 object-cover" />
            <h2 className="uppercase font-bold  text-white text-lg tracking-wider text-center">
              GamesIdn
            </h2>
          </Link>
          <nav className="ml-auto flex text-white nav-top">
            <ul className="flex gap-3  font-medium">
              <Link to={`/games`}>
                <li className="flex items-center py-1 px-3 rounded-full transisi">
                  <a className="text-sm">
                    Discover
                  </a>
                </li>
              </Link>

              <li className="flex items-center py-1 px-3 rounded-full transisi">
                <a href="#Software" className="text-sm">
                  Shop
                </a>
              </li>
              <li className="flex items-center py-1 px-3 rounded-full transisi">
                <a href="#Deck" className="text-sm">
                  Deck Verivied
                </a>
              </li>
              <li className="flex items-center py-1 px-3 rounded-full transisi">
                <a href="#Dock" className="text-sm">
                  Dock
                </a>
              </li>
              <li className="flex items-center py-1 px-3 rounded-full transisi">
                <a href="#Faq" className="text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    // <header className="flex items-center py-10 px-16 transisi" id="header">
    //   <div className="logo flex items-center gap-2">
    //     <img src={logo} alt="logo" className="h-8" />
    //     <h2 className="uppercase text-xl font-medium">Gamesidn</h2>
    //   </div>
    //   <nav className="ml-auto block">
    //     <ul className="flex gap-5">
    //       <li>
    //         <a href="#AboutUs">About Us</a>
    //       </li>
    //       <li>
    //         <a href="#AboutUs">About Us</a>
    //       </li>
    //       <li>
    //         <a href="#AboutUs">About Us</a>
    //       </li>
    //       <li>
    //         <a href="#AboutUs">About Us</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Header;
