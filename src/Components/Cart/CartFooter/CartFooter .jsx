import React from 'react';
import "./cartFooter.scss";

const CartFooter = ({ subtotal }) => {

    return (
        <div className="footer">
            <div>
                <span>Subtotal:</span>
                <span>${subtotal}</span>
            </div>
            <div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default CartFooter;