import { useState } from "react";

export default function HideComponent(){
    const [toggle,setToggle] = useState(false);

   
    return(
    <div >
        <p style={{display:toggle?"none":"block"}}>Click on the Button to hide the content </p>
        <button onClick={(e)=> setToggle(!toggle)}>{toggle?"Unhide":"Hide"}</button>
    </div>
);
}