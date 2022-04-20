import React from "react";

const CartConText = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartConText;