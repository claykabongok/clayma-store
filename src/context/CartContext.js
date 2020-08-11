import React, { createContext, useReducer, useEffect } from "react";
import CartReducer from '../reducers/CartReducer';
const initialState = {
  myShoppingCart: JSON.parse(localStorage.getItem("myShoppingCart"))||[],
  cartSavedForLater: JSON.parse(localStorage.getItem("cartSavedForLater"))||[]


};



export const GlobalCartContext=createContext(initialState);

export const GlobalCartContextProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer,initialState)
    useEffect(()=>{
      localStorage.setItem("myShoppingCart", JSON.stringify(state.myShoppingCart));
      localStorage.setItem("cartSavedForLater", JSON.stringify(state.cartSavedForLater))
    });
    

   

    const saveItemforLater=(savedItem)=>{
      dispatch({
        type: "SAVE_ITEM_FOR_LATER",
        payload: savedItem,
      });
    };
    const removeItemFromSavedForLater=(id)=>{
      dispatch({
        type: "REMOVE_FROM_SAVED_FOR_LATER",
        payload: id,
      });
    };
    const addItemTocart=(cartItem)=>{
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: cartItem,
      }

      );
    };

    const removeItemFromCart=(cartItemId)=>{
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: cartItemId,

      })
    }
    return(
        <GlobalCartContext.Provider value={{
          myShoppingCart: state.myShoppingCart,
            cartSavedForLater:state.cartSavedForLater,
            addItemTocart,
            removeItemFromCart,
            saveItemforLater,
            removeItemFromSavedForLater
        }}>
        {children}
        </GlobalCartContext.Provider>
    );
}
