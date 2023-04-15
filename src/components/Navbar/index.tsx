import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "./Logo";
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store';


const Navbar = () => {
    const cartCount = useSelector((state: RootState) => state.cart.cartCount)

  return (
    <div className="navbar">
      <div className="container nav">
        <Logo />
        <ul>
          <Link className="link" to={"/cart"}>
            Cart
            <span>{cartCount}</span>
          </Link>
          <Link className="link" to={"/"}>
            Log In
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
