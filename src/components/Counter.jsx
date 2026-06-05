import React from 'react'
import { useState } from 'react';

function Counter() {

    const [count,setCount] = useState(0);

    function Increment(){
        setCount(c=> c+1);
    }
    
    function Decrement(){
        setCount(c=> c-1);
    }
    
    function reset(){
        setCount(c=> c=0);
    }
  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={()=> Decrement()}>Decrement</button>
      <button onClick={()=> reset()}>Reset</button>
      <button onClick={()=> Increment()}>Increment</button>
    </div>
  )
}

export default Counter;
