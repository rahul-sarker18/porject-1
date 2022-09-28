import React, { useEffect, useState } from "react";
import AllGame from "../AllGame/AllGame";
import Card from "../Card/Card";
import logo from "../img/logo.png"
import User from "../UserData/User";
import "./Data.css";

const Data = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((datas) => setApi(datas));
  }, []);

  const [cart , setcart] =useState([]);
  const addTocart =(apidata)=>{
    const newcart = [...cart ,apidata]
    setcart(newcart);
  }
  return (
    <div className="data-component">
      <div className="all-data">
        <div className="lofo-div">
          <img src={logo} alt="" width={50} />
          <h1>Every_Day_Game_Club</h1>
        </div>
        <h2>Select today’s game :-- </h2>
        <div className="all-card-div">
          {api.map((data) => (
            <AllGame
             data={data}
             addtocart ={addTocart}
             key ={data.id}
            ></AllGame>
          ))}
        </div>
      </div>
      <div className="all-card">
        {/* user  */}
        <User></User>

        <Card cart ={cart}></Card>


       
      </div>
    </div>
  );
};

export default Data;
