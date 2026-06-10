import { useCounter } from "./customHook";

function Counter(){
    const {count,increment,decrement,reset} = useCounter(0);

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;