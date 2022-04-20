import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";

import CartConText from "../../store/cart-context";

import classes from './HeaderChartButton.module.css'

const HeaderChartButtom = props => {
    const cartCtx = useContext(CartConText)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return (
        <button className={classes.button}  onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>

            <span>Your Cart</span>

            <span className={classes.badge} >{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderChartButtom;