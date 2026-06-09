import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=> {
    let interval;

    if(isRunning){
       interval = setInterval(()=> {
            setTime((prev)=> prev +1)
        },1000);
    }

    return ()=> clearInterval(interval);
  },[isRunning])

  return (
    <div>
        {time}s

        <button onClick={()=> setIsRunning(true)}>Start</button>
        <button onClick={()=> {setIsRunning(false);setTime(0)}}>Reset</button>
        <button onClick={()=> setIsRunning(false)}>Stop</button>

    </div>
  );
}

export default Stopwatch;