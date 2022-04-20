import Modal from '../Ui/Modal';

import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {
            id: 'm1',
            name: 'Sushi',
            amount: 2,
            description: 'Finest fish and veggies',
            price: 22.99,
        },
    ].map((item) => (
        <li>{item.name}</li>
    ))}</ul>

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>25.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']}>close</button>
                <button className={classes.button}>close</button>
            </div>
        </Modal>
    );
}

export default Cart;