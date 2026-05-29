import { useState } from "react";

export default function UpdateFunc(){
    const [count,setCounter] = useState(0);

    function decrement(){
        setCounter(c=> c-1);
        setCounter(c=> c-1);
    }

    return(<>
    <p>{count}</p>
    <button onClick={decrement}>Decrement</button></>)

}