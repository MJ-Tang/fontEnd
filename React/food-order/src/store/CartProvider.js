import { useReducer } from "react";
import CartConText from "./cart-context";

const defalutCartState =  {
    items: [],
    totalAmont: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item)
        const updateTotalAmount = state.totalAmont + action.item.price * action.item.amount
        
        return {
            items: updateItems,
            totalAmont: updateTotalAmount
        }
    }
    return defalutCartState
}

const CartProvider = props => {
    const [cartState, dispathCartAction] = useReducer(cartReducer, defalutCartState)

    const addItemToCarthandler = item => {
        dispathCartAction({type: 'ADD', item: item})
    }

    const reomveItemFromCartHandler = id => {
        dispathCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmont: cartState.totalAmont,
        addItem: addItemToCarthandler,
        removeItem: reomveItemFromCartHandler
    }

    return (
        <CartConText.Provider value={cartContext}>
            {props.children}
        </CartConText.Provider>
    )
}

export default CartProvider;