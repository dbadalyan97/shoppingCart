import React from 'react';

function CartFooter({ data: { subtotal } }) {

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