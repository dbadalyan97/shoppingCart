import React, { useContext, useCallback } from 'react';
import { Redirect } from 'react-router';
import Context from '../../Context/Context';
import { addItemAction } from '../../Reducer/Action';
import './singleCart.scss'
const SingleCart = () => {
    const { state, dispatch } = useContext(Context);

    const addItem = useCallback((event, item) => {
        event.preventDefault();
        dispatch(addItemAction(item));
    }, []);


    return (
        <>
            {state && state.item ? state.item.map(item => <div className="singleCart" key={item.id} style={{ color: item.color }}>
                <div>
                    <img
                        src={item.image ? item.image : 'https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}
                        alt={item.name}
                    />
                </div>
                <div>
                    <h3 >{item.name}</h3>
                    <p>{item.description}</p>
                    <div>
                        <p>{item.price}</p>
                        <button type="button" className='button' onClick={(event) => addItem(event, item)}>Add to cart</button>
                    </div>
                </div>
            </div>) : <Redirect to='/' />
            }
        </>
    )
}

export default SingleCart;
