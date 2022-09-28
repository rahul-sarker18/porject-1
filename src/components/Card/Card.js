import React from 'react';
import './Card.css'

const Card = ({cart}) => {
    let time =0;
    for(const ide of cart){
        time = time + ide.time
    }
    console.log(time)
    return (
        <div className='main-cart'>
            <div>
                <h2>Exercise Details</h2>
                <div className='time-count-div'>
                    <h4>Exercise Details</h4>
                    <h4><span className='times'>{time}</span>(m)</h4>
                </div>

            </div>
            
        </div>
    );
};

export default Card;