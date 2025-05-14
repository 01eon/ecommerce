import { useContext, Fragment } from "react";
import { useSelector } from "react-redux";


import CategoryPreview from "../../components/category-preview/category-preview.component"

import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
    return <span>Loading...</span>; // or null
  }
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
