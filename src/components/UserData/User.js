import React from "react";
import user from "../img/user.png"
import './User.css'
const User = () => {
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
    </div>
  );
};

export default User;
