import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext( {
    categoriesMap: [],

} );

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // One of thing. Uncomment only if there's changes to the current db.
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };
    return (
       <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}