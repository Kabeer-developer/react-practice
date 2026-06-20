import { useEffect, useState } from "react";

export default function Timer(){
    const [timer,setTimer] = useState(3);
    const [running,setRunning] = useState(false);

    useEffect(()=> {
        let interval;
        if(running){
            interval = setInterval(() => {
                setTimer((prev)=> prev-1);
            }, 1000);
        }

        if(timer===0){
            setRunning(false);
        }

        return ()=> clearInterval(interval);
    },[running])

    return(
        <div>
            {timer}seconds
            <button onClick={()=> setRunning(true)}>Start</button>
        </div>
    )
}