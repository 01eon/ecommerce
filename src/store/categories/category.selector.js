import { createSelector } from "reselect";

const selectCategorySelector = (state) => {
  return state.categories;
};

// memoized selector
export const selectCategories = createSelector(
  [selectCategorySelector],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
