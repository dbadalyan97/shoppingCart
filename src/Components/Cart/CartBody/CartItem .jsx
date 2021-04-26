import React from 'react';
import "./cartBody.scss";

const CartItem = ({ data, changeQuantityValue, onDecrement, onIncrement, handleDeleteItem }) => {

    return (
        <div className="cartItem">
            <div>
                <img src={data.image ? data.image : "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"} alt={data.name} />
            </div>
            <div style={{ color: `${data.color}` }}>
                <div>
                    <b>{data.name}</b>
                </div>
                <div>
                    <span></span>
                    <span className="delete-icon" onClick={() => handleDeleteItem(data.id)}>
                        <img src='/images/remove.svg' alt="" />
                    </span>
                </div>
                <div>
                    <button onClick={onDecrement} id={data.id}>-</button>
                    <input type="number" onChange={changeQuantityValue} value={data.quantity} id={data.id} />
                    <button onClick={onIncrement} id={data.id}>+</button>
                    <span>
                        {data.price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
