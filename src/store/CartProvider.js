import CartContext from './cart-context'
import { useReducer } from 'react';

const defaultCart = {
    items:[],
    totalAmount:0
};
const cartReducer = (state,action)=>{
    if(action.type === 'ADD'){
        const updatedItems = state.item.concat();
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    return defaultCart;
    
};

const CartProvider = (props)=>{
    const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCart)

    const addItemToCartHandler= (item)=>{
        dispatchCartAction({type:'ADD', item: item});
    };

    const removeItmFromCartHandler=id=>{};

    const cartContext={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItmFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;