import { useState } from "react";

export default function ShowHidePassword(){
    const [showPass,setShowPass] = useState(false);
    
    return(
        <div>
            <input type={showPass? "text":"password"}></input>
            <button onClick={()=> setShowPass(!showPass)}>{showPass? "Hide":"View"}</button>
            
        </div>
    )
}