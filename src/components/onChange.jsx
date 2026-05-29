import { useState } from "react";

export default function Onchange(){
    const [name,setName] = useState("Guest");

   function updateName(e){
    setName(e.target.value);
   }
   return(<div>
    <input type="text" value={name} onChange={updateName} placeholder="Enter name"></input>
    <p>Name is : {name}</p>
   </div>)
}