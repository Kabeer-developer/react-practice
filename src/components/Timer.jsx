import { useEffect, useState } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(3);
    const [running, setRunning] = useState(false);

    useEffect(() => {
       if(timer<0) return;

       let interval;

      if(running){
         interval = setInterval(()=> {
        if(timer>0){
            setTimer((prev)=> prev-1);
        } else {
            clearInterval(interval);
            setRunning(false);
            return 0;
        }
       },1000);
      }

       return ()=> clearInterval(interval);

    }, [running]);

    return (
        <div>
            {timer >0 ? (<>
            <p>{timer}Seconds</p>
            <button onClick={()=> setRunning(true)}>Start</button>
            </>): (
                <p>Completed</p>
            )}

        </div>
    );
}