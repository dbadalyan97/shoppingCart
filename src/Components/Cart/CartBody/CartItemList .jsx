import React from 'react';
import CartItem from './CartItem ';

const CartItemList = ({ data, onDecrement, onIncrement, changeQuantityValue, handleDeleteItem }) => {

    return (
        <div>
            {data && data.map((item, i) =>
                <CartItem data={item}
                    key={i}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    changeQuantityValue={changeQuantityValue}
                    handleDeleteItem={handleDeleteItem}
                />
            )}
        </div>
    )
}

export default CartItemList;
