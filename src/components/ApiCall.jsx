import { useEffect, useState } from "react";

function Fetch() {
   const [users,setUsers] = useState([])
   const [loading,setLoading] = useState(true);
   const [error,setError] = useState(null);

   useEffect(()=> {
    async function Call() {
         try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!response.ok){
            throw new Error("Failed to fetch");
        }
        const result = await response.json();
        setUsers(result);
        setLoading(false);
    } catch(err){
        setError(err);
        setLoading(false);
    }
    }
    Call();
   },[]);
   
   if(loading) return <div>Loading...</div>
   if(error) return <div>{error}</div>

   return(
    <div>
        {users.map((user,i)=> {
            return <li key={user.id}>Id: {user.id} Name: {user.name}</li>
        })}
    </div>
   )
}


export default Fetch;