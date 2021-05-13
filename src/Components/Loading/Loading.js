import React from 'react';
import './loading.scss';

function Load() {
    return (
        <div className="load">
            <div className="content">
                <div className="planet">
                    <div className="ring"></div>
                    <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>Loading</p>
            </div>
        </div>
    )
}

export default Load;