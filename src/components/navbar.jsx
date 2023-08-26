import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>


          </ul>
        </nav>
        <Link to="/" id="header"> ShopCart </Link>

        {/* <Link to="/contact"> Contact </Link> */}
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
