import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assest";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [carItems, setCarItems] = useState({});

    const addToCart = (itemId) => {

        if (!carItems[itemId]) {
            setCarItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {

        setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))


    };


    useEffect(() => {
        console.log(carItems);

    }, [carItems]);

    const contextValue = {
        food_list,
        carItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
