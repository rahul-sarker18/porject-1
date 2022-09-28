import React from "react";
import './Brack.css'

const Brack = ({bracks, breackHendel}) => {
    
  return (
    <div>
      <div className="brack-list">
        <button onClick={()=>breackHendel(bracks)} className="btn-time">{bracks.time}m</button> 
      </div>
    </div>
  );
};

export default Brack;
