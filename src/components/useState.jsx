import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    function Increment(){
        setCount(c=> c+1);
    }

    function Decrement(){
        setCount(c=>c-1)
    }
    return(<>
    <h1>Counter is {count}</h1>
    <button onClick={()=>Decrement()}>Decrement</button>
    <button onClick={()=>Increment()}>Increment</button>
    </>);
}

export default Counter;