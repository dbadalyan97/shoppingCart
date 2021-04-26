import React, { useEffect, useState } from 'react';
import CartFooter from './CartFooter/CartFooter ';
import CartHeader from './CartHeader/CartHeader ';
import CartItemList from './CartBody/CartItemList ';
import Load from '../Loading/Load';

const Cart = () => {
    const [isShowCart, setIsShowCart] = useState(true);
    const [data, setData] = useState(null);
    const [subtotal, setSubtotal] = useState();

    const handleOpenCart = () => {
        setIsShowCart(!isShowCart);
    }

    const getDataAPI = async () => {
        const getData = await fetch("MOCK_DATA.json");
        let parsData = await getData.json();
        setTimeout(() => {
            setData(parsData);
        }, 5000);
    };

    useEffect(() => {
        getDataAPI();
    }, []);

    useEffect(() => {
        changeSubtotal();
    }, [data]);

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

    const onDecrement = (event) => {
        const currentId = parseInt(event.target.id);
        const newData = data.map((item) => {
            if (item.id === currentId && item.quantity > 0) {
                item.quantity -= 1;
            }
            return item;
        })
        setData(newData);
    }

    const onIncrement = (event) => {
        const currentId = parseInt(event.target.id);
        const newData = data.map((item) => {
            if (item.id === currentId) {
                item.quantity = parseInt(item.quantity) + 1;
            }
            return item;
        })
        setData(newData);
    }

    const changeQuantityValue = (event) => {
        if (!event.target.value) return
        const currentId = parseInt(event.target.id);
        const newData = data.map((item) => {
            if (item.id === currentId) {
                item.quantity = event.target.value;
            }
            return item;
        })
        setData(newData);
    }

    const changeSubtotal = () => {
        let currentSubtotal = 0;
        data && data.forEach(item => currentSubtotal += item.price.slice(1) * item.quantity);
        setSubtotal(currentSubtotal.toFixed(2));
    }

    const handleDeleteItem = (id) => {
        const deletedData = data.filter(item => item.id !== id);
        setData(deletedData);
    }
    if (!!data) {
        return (
            <div className="cart">
                <CartHeader handleOpenCart={handleOpenCart} />
                {data.length ? <>{isShowCart && <>
                    <CartItemList
                        data={data.length > 0 ? data : []}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        changeQuantityValue={changeQuantityValue}
                        onChange={onChangeSelect}
                        handleDeleteItem={handleDeleteItem}
                    />
                    <CartFooter subtotal={subtotal} />
                </>}
                </> : <div className="catr-is-empty">The cart is empty :(</div>}
            </div>
        )
    }
    return (
        < Load />
    )
}
export default Cart;
