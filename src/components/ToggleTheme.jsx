import { useState } from "react";

function Toggle(){
    const [isDark,setIsDark] = useState(false);

    const darkTheme = {
        backgroundColor:"black",
        color:"white",
    }

    const lightTheme = {
        backgroundColor:"white",
        color:"black",
    }

   return(<div style={{...isDark?darkTheme:lightTheme,minHeight:"100vh"}}>
    <p>Hello</p>
    <button onClick={(e)=> setIsDark(!isDark)}>{isDark?"Light Theme":"Dark Theme"}</button>
   </div>)
}

export default Toggle;