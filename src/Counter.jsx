import { useState } from "react";

function Counter() {
  
    const [count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount(count+1);
    }

    const decrementCount=()=>{
        setCount(count-1);
    }
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button type="button" onClick={incrementCount}>Increment</button>
        <button type="button" onClick={decrementCount}>Decrement</button>
      </>
    )
  }
  
  export default Counter;
  