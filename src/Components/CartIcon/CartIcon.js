import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../Context/Context';
import './cartIcon.scss';

const CartIcon = () => {
    const { state } = useContext(Context);

    return (
        <div className="cartIcon">
            <NavLink to='/cart' activeStyle={{ color: "black", fontWeight: 'bold' }}>
                <img src="/images/cart.svg" />
                <h1>{state?.cart?.length || 0}</h1>
            </NavLink>
        </div>
    )
}

export default CartIcon
