import FetchHook from "./apiCusHook";

export  function ApiCall(){
    const {users,loading,error} = FetchHook(`https://jsonplaceholder.typicode.com/users`);

    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>

    return(
        <div>
            {users.map((u,i)=>{
                return <li key={i}>{u.name}</li>
            })}
        </div>
    )
}