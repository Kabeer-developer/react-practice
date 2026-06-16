import { useRef } from "react";

export default function UseRef(){

    const countRef = useRef(0);

    function  Increment(){
        countRef.current++;
        console.log(countRef.current);
    }
    return(
        <div>
            <button onClick={Increment}>Click</button>
        </div>
    );
}