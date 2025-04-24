import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
  cateogiesMap: {},
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { SET_CATEGORIES_MAP } = CATEGORIES_ACTION_TYPE;
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES_MAP:
      return { ...state, cateogiesMap: payload };
    default:
      return state;
  }
};
