import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';
import Loading from '../Loading/Loading';
import { getSingleItem, addItemAction } from '../../Reducer/Action';
import './product.scss';

const Products = () => {
    const { state, dispatch } = useContext(Context);

    const addItem = useCallback((event, item) => {
        event.preventDefault();
        dispatch(addItemAction(item));
    }, []);

    return (
        <>
            {state && state.data ? state.data.map(item => <div className="product" key={item.id}>
                <div><Link to={`/product/${item.id}`}><h3 onClick={() => dispatch(getSingleItem([item]))}>{item.name}</h3></Link></div>
                <div>
                    <Link to={`/product/${item.id}`}><img
                        src={item.image ? item.image : 'https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}
                        alt={item.name}
                        onClick={() => dispatch(getSingleItem([item]))}
                    /></Link>
                </div>
                <div>
                    <button type="button" className='button' onClick={(event) => addItem(event, item)}>Add to cart</button>
                </div>
            </div>) : <Loading />
            }
        </>
    )
}

export default Products;
