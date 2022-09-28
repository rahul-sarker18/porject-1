import React, { useState } from "react";
import user from "../img/user.png"
import './User.css'
const User = () => {
  // const [s ,sets]=useState([])
  // const hendel=(e)=>{
  //   console.log(e.target.value);
  //   console.log('ame consol')

  // }

  
  return (
    <div>
      <div className="user-name">
        <img src={user} alt="" className="user-img" />
        <div className="user-locat">
          <h3>Rahul Sarker</h3>
          <p>
            <i class="fa-solid fa-location-dot"></i> Nodia ,INDIA
          </p>
        </div>
      </div>

      <div className="user-bio">
        <div>
          <p>
            <span className="kg">56</span>kg
          </p>
          <p className="age">Weight</p>
        </div>
        <div>
          <p>
            <span className="kg">5.6</span>
          </p>
          <p className="age">Height</p>
        </div>
        <div>
          <p>
            <span className="kg">18</span>yrs
          </p>
          <p className="age">Age</p>
        </div>
      </div>
      {/* add a brack */}
      <div className="">
        <h2 className="h2">Add A Break</h2>
        <div className="brack-list">
          <button className="btn-time" name="s">10m</button>
          <button className="btn-time"><span>20</span> m</button>
          <button className="btn-time"><span>30</span>m</button>
          <button className="btn-time"><span>40</span>m</button>
          <button className="btn-time"><span>50</span>m</button>
          <button className="btn-time"><span>60</span>m</button>
        </div>
      </div>
    </div>
  );
};

export default User;
