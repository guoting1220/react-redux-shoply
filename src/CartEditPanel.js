import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartEditPanel.css';
import { addToCart, removeFromCart } from './actions';


const CartEditPanel = ({ id }) => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));

  if (cart[id]) {
    return (
      <div className="CartEditPanel">
        <i className="fa fa-cart-arrow-down" id="addBtn" onClick={remove}></i>
        <span> {cart[id]} </span>
        <i class="fa fa-cart-plus" id="removeBtn" onClick={add}></i>
      </div>
    )
  }
  else {
    return (
      <div className="CartEditPanel">
        <i className="fa fa-cart-plus" id="removeBtn" onClick={add}></i>
      </div>
    )
  }
}

export default CartEditPanel;

