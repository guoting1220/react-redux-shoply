import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT, REMOVE_DISCOUNT } from './actionTypes'

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
});


export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART, 
  id 
});

export const getDiscount = (discount) => ({
  type: APPLY_DISCOUNT,
  discount
});

export const removeDiscount = () => ({
  type: REMOVE_DISCOUNT
});