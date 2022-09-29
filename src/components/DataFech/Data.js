import React, { useEffect, useState } from "react";
import AllGame from "../AllGame/AllGame";
import Brack from "../Brack/Brack";
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

  const [cart, setcart] = useState([]);
  const addTocart = (apidata) => {
    setcart([...cart, apidata]);
  };

// brack time count 

  const [brack, setBrack] = useState([]);
  useEffect(() => {
    fetch("brack.json")
      .then((res) => res.json())
      .then((datas => setBrack(datas)));
  }, []);

//   local storage add 
//   useEffect(()=>{
//     const get =localStorage.getItem('time')
//     const last =JSON.parse(get);
//     if(last){
//         setBr(last);
//     }

//   }, [brack])

  const [br ,setBr] =useState([]);
  const addtobrack =(brak)=>{
    const newbr =[...br ,brak]
    setBr(newbr)

    // const inf ={
    //    ...brak
    // }
    // const get =localStorage.getItem('time')
    // const last =JSON.parse(get);
    // if(last){
    //     localStorage.setItem('time' ,JSON.stringify([...last ,inf]))
    // }else{
    //     localStorage.setItem('time' ,JSON.stringify([...last ,inf]))
    // }
    // setBr(...last ,inf);
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

        <div className="brak-mar">
        {
            brack.map(brk => <Brack
                 bracks ={brk}
                 key ={brk.id}
                 breackHendel ={addtobrack}
                 ></Brack>)
        }
        </div>

        <Card
         cart ={cart}
         brt ={br}
        ></Card>
       
      </div>
    </div>
  );
};

export default Data;
