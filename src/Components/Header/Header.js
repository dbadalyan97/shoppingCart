import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div>
                <NavLink to='/products' activeStyle={{ color: "black", fontWeight: 'bold' }}>
                    Products
                </NavLink>
            </div>
            <CartIcon />
        </div >
    )
}

export default Header
