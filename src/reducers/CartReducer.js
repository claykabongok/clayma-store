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
                cartTransaction:[action.payload, ...state.cartTransaction],
            };
            case "REMOVE_ITEM_FROM_CART":
                return{
                    ...state,
                    cartTransaction: state.cartTransaction.filter(
                        (cartTransaction) => cartTransaction.id !== action.payload
                    )

                };
                case "REMOVE_FROM_SAVED_FOR_LATER":
                    return{
                        ...state,
                        cartSavedForLater: state.cartSavedForLater.filter(
                            (cartSavedForLater) => cartSavedForLater.id !== action.payload
                        )
                        
                    };
        default:
            return state;
    }
};