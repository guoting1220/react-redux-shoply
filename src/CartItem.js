import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartEditPanel from './CartEditPanel';
import './CartItem.css';

const CartItem = ({ id }) => {
  const products = useSelector(store => store.products);

  return (
    <div className="CartItem">
      <Link exact to={`/products/${id}`}>
        <img src={products[id].image_url} alt={products[id].name} />
      </Link>
      <div className="CartItem-info">
        <p className="CartItem-info-name">
          <Link exact to={`/products/${id}`}>
            {products[id].name}
          </Link>
        </p>
        <p><b>Price</b>: $ {products[id].price}</p>
        <p><b>Qty</b>: <CartEditPanel id={id} /></p>
      </div>
      <hr></hr>
    </div>
  )
}

export default CartItem;