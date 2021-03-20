import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { calculateItemsQty } from './helpers';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const itemQtyInCart = calculateItemsQty(useSelector(store => store.cart))
  return (
    <div className="NavBar">
      <nav>
        <NavLink exact to="/" id="brand">Shoply</NavLink>
        <div className="NavBar-NavItems">
          <NavLink activeClassName="NavBar-active" exact to="/">Products</NavLink>
          <NavLink activeClassName="NavBar-active" exact to="/cart">Cart ({itemQtyInCart})</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;