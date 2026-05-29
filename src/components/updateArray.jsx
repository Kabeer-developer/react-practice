import { useState } from "react";

export default function Array(){
  const [array,setArray] = useState(["a","b","c"]);
  const [input,setInput] = useState("");

   function add(){
      
      setArray(a=> [...a,input]);
      setInput("");
   }

   function remove(index){
      setArray(array.filter((_,i)=> i!==index));
   }

   return(<div>
      <input type="text" id="input" value={input} onChange={(e)=> setInput(e.target.value)}></input>
      <button onClick={add} >Add</button>

      <ul>
         {array.map((a,index)=> (
            <li key={index}>{a}
            <button onClick={()=> remove(index)}>remove</button></li>
         ))}
      </ul>
      
   </div>)
}