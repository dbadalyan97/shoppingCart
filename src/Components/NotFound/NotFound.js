import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="info">
                <h3>This page could not be found</h3>
                <div className='button'><Link to='/'>Go Home</Link></div>
            </div>
            <div className="img">
                <img src="https://miro.medium.com/max/5120/1*DeBkx8vjbumpCO-ZkPE9Cw.png" />
            </div>
        </div >
    )
}

export default NotFound;
