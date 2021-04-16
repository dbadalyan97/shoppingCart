import React from 'react';
import icon from './cancel.svg';
import './style.scss';

function CartHeader(props) {
    return (
        <div className="header">
            <p>Your cart</p>
            <img src={icon} alt="close" onClick={props.handleOpenCart}></img>
        </div>
    )
}

export default CartHeader;
