import { useEffect, useState } from "react";

function FetchHook(url) {
    const [users,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        async function Call(){
             try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Failed");
            }
            const result = await response.json();
            setUser(result);
            setLoading(false);
        } catch(e){
            setError(e);
            setLoading(false);
        }
        }
       Call();
    },[url])

   
    return{
        users,
        loading,
        error,
    }
   
}


export default FetchHook;