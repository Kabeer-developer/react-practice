import { useState } from "react";

export default function UpdateObj(){
    const [car,setCar] = useState({model:2005,name:"maruti"});

    function updateYear(e){
        setCar({...car,model:e.target.value});
    }

    return(<><input value={car.model} onChange={updateYear}></input>
    <p>model after update{car.model}</p></>)
}