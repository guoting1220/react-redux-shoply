import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import CartItem from './CartItem';
import { calculateTotalPrice } from './helpers';
import { getDiscount, removeDiscount } from './actions';


const Cart = () => {
  const { products, cart, discount, discountApplied, discountMsg, tax } = useSelector(store => store);
  const { subtotal, discountAmt, taxAmt, total } = calculateTotalPrice(products, cart, discount, tax);

  const [discountCode, setDiscountCode] = useState("");

  const dispatch = useDispatch();
  const applyDiscount = () => dispatch(getDiscount(discountCode));
  const deleteDiscount = () => dispatch(removeDiscount());

  const handnleChange = (e) => {
    setDiscountCode(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    applyDiscount();
    setDiscountCode("");
  }

  if (Object.keys(cart).length === 0) return (
    <>
      <h2>My Cart</h2>
      <p>No items in your cart!</p>
    </>
  )

  return (
    <div>
      <h2>My Cart</h2>
      <div className="Cart">
        {Object.keys(cart).map(id => <CartItem key={id} id={id} />)}

        <div className="Cart-summary">
          <p>Subtotal: ${subtotal}</p>

          <form onSubmit={handleSubmit}>
            <span>Promotion Code: </span>
            <input
              type="text"
              id="discountCode"
              name="discountCode"
              value={discountCode}
              onChange={handnleChange}
            ></input>
            <button className="Cart-addDiscount-btn">Apply</button>
          </form>

          <p id="discountMsg">
            <i>{discountMsg}</i> - ${discountAmt}
            {discountApplied ?
              <i
                className="fas fa-backspace Cart-removeDiscount-btn"
                onClick={deleteDiscount}
              >
              </i>
              : null
            }
          </p>

          <p>Tax ({(tax * 100).toFixed(2)}%): + ${taxAmt}</p>
          <p id="total"><b>Total</b>: $<span>{total}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart;