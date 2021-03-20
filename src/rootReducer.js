import data from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT, REMOVE_DISCOUNT } from './actionTypes';

const discountOptions = {
  REMOVE10: 0.1,
  REMOVE20: 0.2,
  REMOVE30: 0.3
}

const TAX = 0.0725;

const INITIAL_STATE = {
  products: data.products,
  cart: JSON.parse(localStorage.getItem("cart")) || {},
  discount: 0,
  discountApplied: false,
  discountMsg: "No promotion code applied.",
  tax: TAX
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productId = action.id;
      const cartCopy = { ...state.cart };
      cartCopy[productId] = (cartCopy[productId] || 0) + 1
      localStorage.setItem("cart", JSON.stringify(cartCopy));
      return { ...state, cart: cartCopy };
    }

    case REMOVE_FROM_CART: {
      const productId = action.id;
      const cartCopy = { ...state.cart };
      if (cartCopy[productId]) {
        if (cartCopy[productId] > 1) {
          cartCopy[productId]--;
        }
        else {
          delete cartCopy[productId];
        }
        localStorage.setItem("cart", JSON.stringify(cartCopy));
        return { ...state, cart: cartCopy };
      }
      else return state;
    }

    case APPLY_DISCOUNT: {
      if (!state.discountApplied && discountOptions[action.discount]) {
        return {
          ...state,
          discount: discountOptions[action.discount],
          discountApplied: true,
          discountMsg: `"${action.discount}" applied:`,
        };
      }
      else if (!state.discountApplied && !discountOptions[action.discount]) {
        return {
          ...state,
          discountMsg: "Invalid promotion code.",
        };
      }
      else if (state.discountApplied) {
        return {
          ...state,
          discountMsg: "No multiple promotion codes.",
        };
      }
      break;
    }

    case REMOVE_DISCOUNT:
      return {
        ...state, 
        discount: 0,
        discountApplied: false,
        discountMsg: "No promotion code applied."
      };

    default:
      return state;
  }
}

export default rootReducer;