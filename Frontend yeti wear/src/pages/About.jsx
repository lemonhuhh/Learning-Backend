import { useState } from "react"

function About() {
  const [count ,setCount] = useState(1)

  const handleIncrement = ()=>{
    setCount(count + 1)
  }

  const handledecrement = ()=>{
    setCount(count - 1)
  }
  return (
  <>
  <div>
    <p>{count}</p>
    <button onClick={handleIncrement} className="primary-btn">Increment</button>
    <button onClick={handledecrement} className="primary-btn">Decrement</button>
  </div>
  </>)
}

export default About;
