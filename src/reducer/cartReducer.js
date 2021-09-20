const initialData = {
    cartitems: [
    ]
  };
function cartReducer(state = initialData, action) {

    switch (action.type) {
        case 'ADD_ITEM_TO_CART': return {
                
            ...state,
            cartitems: [...state.cartitems, action.payload]
           
        }
     
        case 'DELETE_ITEM_FROM_CART': return {
            ...state,
            cartitems: state.cartitems.filter(item => item.phone_name !== action.payload.phone_name),
         
        } 
       
        default :{
            break;
        }
    }

    return state

}
export default cartReducer