import React, { useState } from 'react';
import CartFooter from './CartFooter ';
import CartHeader from './CartHeader ';
import CartItemList from './CartItemList ';

function Cart() {
    const [isShowCart, setIsShowCart] = useState(true);
    const [data, setData] = useState({ items: [{ price: 1399, image: 'https://www.appliancesonline.com.au/public/images/product/5ksb5085aca/external/KitchenAid-5KSB5085ACA-Magnetic-Drive-Blender-Angle-high.jpeg', quantity: 1, name: 'Blender1', color: 'red' }, { price: 1399, image: 'https://www.appliancesonline.com.au/public/images/product/5ksb5085aca/external/KitchenAid-5KSB5085ACA-Magnetic-Drive-Blender-Angle-high.jpeg', quantity: 1, name: 'Blender2', color: 'red' }, { price: 1399, image: 'https://www.appliancesonline.com.au/public/images/product/5ksb5085aca/external/KitchenAid-5KSB5085ACA-Magnetic-Drive-Blender-Angle-high.jpeg', quantity: 1, name: 'Blende3', color: 'red' }], subtotal: 4197 },)

    const handleOpenCart = () => {
        setIsShowCart(!isShowCart);
    }

    const deleteItem = (getName) => {
        let subtotal = data.subtotal
        const currentData = data.items.filter((item) => {
            if (item.name === getName) {
                subtotal -= item.price * item.quantity;
                return false;
            };
            return true;
        });
        setData({ items: currentData, subtotal });
    }

    const onChangeSelect = (event, name) => {
        let subtotal = 0;
        const changedData = data.items.map((item) => {
            if (item.name === name) {
                item.quantity = event.target.value;
            }
            subtotal += item.quantity * item.price;
            return item;
        });
        setData({ items: changedData, subtotal });
    }

    return (
        <div className="cart">
            <CartHeader handleOpenCart={handleOpenCart} />
            {isShowCart && <>
                <CartItemList data={data.items} onClick={deleteItem} onChange={onChangeSelect} />
                <CartFooter data={data} />
            </>}
        </div>
    )
}

export default Cart;
