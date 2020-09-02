import React, { useState, useContext } from "react";
import {
  faBars,
  faShoppingCart,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { myShoppingCart } = useContext(GlobalCartContext);
  const [toggleNav, setToggelNav] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setToggelNav(!toggleNav);
  }
  return (
    <div>
      <header>
        <div className="container-nav">
          <nav className={` ${toggleNav ? "active" : ""}`}>
            <div className="menu-icon">
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon-bar"
                onClick={(e) => handleToggle(e)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="menu-icon-close"
                onClick={(e) => handleToggle(e)}
              />
            </div>

            <ul className="navigation-list">
              <li>
                <Link to="/">
                Home
                </Link>
                {/* <a href="/">Home</a>     */}
              </li>
              <li>
              <Link to="#">
              Products
              <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </Link>
               
                <ul className="products-cat">
                  <li>
                    <Link to="/collections">All</Link>
                    
                  </li>
                  <li>
                    <Link to="/collections/men">Men</Link>
                  </li>
                  <li>
                    <Link to="/collections/women">Women</Link>
                  </li>
                  <li>
                    <Link to="/collections/kids">Kids</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  Collections
                  <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </Link>
                <ul className="products-cat">
                  <li>
                    <Link to="/trend/New">New Arrival</Link>
                  </li>
                  <li>
                    <Link to="/trend/Trending">Trending</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/search">Search</Link>
              </li>

              <li className="nav-shopping-cart">
                <Link
                  to="/cart"
                  className="cart position-relative d-inline-flex"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="store-cart-icon"
                  />
                  <span className="cart-basket d-flex align-items-center justify-content-center ">
                    {myShoppingCart.length}{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
