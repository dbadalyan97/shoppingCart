import React, { useState } from 'react';
import icon from './cancel.svg';

function CartItem({ data, onClick, onChange }) {

    return (
        <div className="cartItem">
            <div>
                <img src={data.image} alt={data.name} />
            </div>
            <div>
                <div>
                    <b>{data.name}</b>
                </div>
                <div>
                    <span>
                        {data.color}
                    </span>
                    <span className="delete-icon" onClick={onClick}>
                        <img src={icon} />
                    </span>
                </div>
                <div>
                    <select value={data.quantity} onChange={onChange}>
                        <option>
                            {1}
                        </option>
                        <option>
                            {2}
                        </option>
                        <option>
                            {3}
                        </option>
                        <option>
                            {4}
                        </option>
                        <option>
                            {5}
                        </option>
                    </select>
                    <span>
                        ${data.price * data.quantity}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
