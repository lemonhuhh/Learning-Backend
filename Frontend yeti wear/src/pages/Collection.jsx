import React from "react";
import { useState, useEffect } from "react";
import product from "../data/data.js";
import axios from "axios";
import API_URL from "../api/api.js";

function Collection() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const productdatas = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/products`,
        );
        setData(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (error) {
        setError("Error fetching the data" + error.message);
        setLoading(false);
      }
    };
    productdatas();
  }, []);

  if (loading) {
    return <h1>Loading datas......</h1>;
  }
  if (error) {
    return <h1>Error!{error}</h1>;
  }

  // const [products, setProducts] = useState();
  // async function getData() {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.log("Error fetching the data.");
  //   }
  // }
  // getData();

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert("Count is changed " + count);
  //   localStorage.setItem("Count", count);
  // }, [count]);

  // const [price, setPrice] = useState(1000);
  // const handleIncrement = () => {
  //   setCount(count + 1);

  //   setPrice(price + price);
  // };

  // const handledecrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      {data &&
        data.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      {/* <div>{products.map(() => {})}</div>
      <div>
        <p>Product no.{count}</p>
        <p>Rs.{price}</p>
        <button onClick={handleIncrement} className="primary-btn">
          +
        </button>
        <button onClick={handledecrement} className="primary-btn"></button>
      </div> */}
    </>
  );
}

export default Collection;
