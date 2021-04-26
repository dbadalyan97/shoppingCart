import React from 'react';
import './cartHeader.scss';

const CartHeader = (props) => {
    return (
        <div className="header">
            <p>Your cart</p>
            <img src="/images/close.svg" alt="close" onClick={props.handleOpenCart}></img>
        </div>
    )
}

export default CartHeader;
