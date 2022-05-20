export const initialState = {
    basket: [], 
    user: null,

};
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

 const reducer = (state, action) => {
    console.log(action); 
    switch(action.type){
        case"SET_USER": 
        return {
            ...state,user: action.user
        };
        case "ADD_TO_BASKET":
            //LOGIC FOR ADDING ITEM BASKET
            return {
                ...state, //we return then the basket item plus the one we added
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            //LOGIC FOR REMOVING ITEM FROM THE BASKET
            
            //we clone to see if the product exists
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        if (index >= 0) {
             // items exists in basket, remove it... 
                newBasket.splice(index, 1);
            }  else {
                console.warn(
                   `Sorry, Cant remove product (id: ${action.id}) as its not in basket!`
                );
            
                }
               // we  return the basket wich is equal to new basket,, the one we removed the item
            return {...state, basket: newBasket,
             };
            
        default:
            return state;
    }
};
export default reducer;  