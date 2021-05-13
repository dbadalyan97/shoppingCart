import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Context from '../../Context/Context';
import './selectedCarts.scss';

const SelectedCart = () => {
    const { state } = useContext(Context);

    return (
        <div className="selectedCarts">
            {state && state.cart ? state.cart.map(item => <div className="selectedCart" key={item.id}>
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
                        <button type="button" className='button' >Add to cart</button>
                    </div>
                </div>
            </div>) : <Redirect to='/' />
            }
        </div>
    )
}

export default SelectedCart;

