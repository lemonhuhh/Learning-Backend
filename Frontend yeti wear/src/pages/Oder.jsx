import React from "react";
import data from "../data/data";
import product from "../data/data";
import { useState } from "react";

function Oder() {

    const removeOder=()=>{
        localStorage.removeItem("details")
    }

    localStorage.setItem("details",JSON.stringify(product))

  return <>
  {/* <div>
    {product.map((oder) =>(
        <div key={oder.id}>
        <p>{oder.name}</p>
        <h2>{oder.price}</h2>
        </div>
    )
)}
  </div> */}

  <p>{localStorage.getItem("details")}</p>
  <button onClick={removeOder} className="primary-btn">Remove oder</button>
  </>;
}

export default Oder;
