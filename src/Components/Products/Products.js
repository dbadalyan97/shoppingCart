import React, { useContext, useCallback, useEffect } from 'react'
import Product from '../Product/Product';
import Context from '../../Context/Context';
import { getDataAction } from '../../Reducer/Action';
import './products.scss';

const Products = () => {
    const { state, dispatch } = useContext(Context);

    const getDataAPI = useCallback(async () => {
        const getData = await fetch("product_list.json");
        let parsData = await getData.json();
        localStorage.setItem('data', JSON.stringify(parsData));
        setTimeout(() => {
            dispatch(getDataAction(parsData));
        }, 0);
    }, []);

    useEffect(() => {
        if (state?.data) return;
        if (localStorage.getItem('data')) dispatch(getDataAction(JSON.parse(localStorage.getItem('data'))));
        else {
            getDataAPI();
        }
    }, []);

    return (
        <div className='products'>
            <Product />
        </div>
    )
}

export default Products;