import React, { useState } from 'react';
import CartItem from './CartItem ';

function CartItemList({ data, onClick, onChange }) {

    return (
        <div>
            {data.map((item, i) =>
                <CartItem data={item} key={i} onClick={() => onClick(item.name)} onChange={(event) => onChange(event, item.name)} />
            )}
        </div>
    )
}

export default CartItemList;
