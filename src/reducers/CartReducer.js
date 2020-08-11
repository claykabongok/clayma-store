export default (state, action)=>{
   
    switch(action.type){
        
        case "SAVE_ITEM_FOR_LATER":
            return{
                ...state,
                cartSavedForLater:[action.payload, ...state.cartSavedForLater],
            };
        case "ADD_ITEM_TO_CART":
            return{
                ...state,
                myShoppingCart:[action.payload, ...state.myShoppingCart],
            };
            case "REMOVE_ITEM_FROM_CART":
                return{
                    ...state,
                    myShoppingCart: state.myShoppingCart.filter(
                        (myShoppingCart) => myShoppingCart.cartItemId !== action.payload
                    )

                };
                case "REMOVE_FROM_SAVED_FOR_LATER":
                    return{
                        ...state,
                        cartSavedForLater: state.cartSavedForLater.filter(
                            (cartSavedForLater) => cartSavedForLater.cartItemId !== action.payload
                        )
                        
                    };
        default:
            return state;
    }
};