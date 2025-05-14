import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  const { SET_CART_ITEMS, SET_IS_CART_OPEN } = CART_ACTION_TYPES;

  switch (type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
      case SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
