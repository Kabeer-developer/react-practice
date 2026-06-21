import { useEffect, useState } from "react";

function Debounce(){
    const [query,setQuery] = useState("");

    useEffect(()=> {
        const timer = setTimeout(() => {
           if(query){
            console.log("searching",query);
           }
        }, 1000);
       return ()=> clearTimeout(timer);
    },[query]);
return(<>
    <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search.."></input>
</>)
}

export default Debounce;