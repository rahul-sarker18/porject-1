import React from 'react';
import Swal from 'sweetalert2'
import './Card.css'

const Card = ({cart ,brt}) => {
    let time =0;
    for(const ide of cart){
        time = time + ide.time
    }
    let bracktime =0;
    for(const brts of brt){
        bracktime =brts.time;
    }
    const switall =()=>{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }

    return (
        <div className='main-cart'>
            <div>
                <h2>Exercise Details</h2>
                <div className='time-count-div'>
                    <h4>Gameing time</h4>
                    <h4><span className='times'>{time}</span>(m)</h4>
                </div>
            </div>

            <div>
            <div className='time-count'>
                    <h4>Break time</h4>
                    <h4><span className='times'>{bracktime}</span>(m)</h4>
                </div>
            </div>

           <div className="btn-div-das">
           <button onClick={switall} className='btn-das'>Activity Completed</button>
           </div>
            
        </div>
    );
};

export default Card;