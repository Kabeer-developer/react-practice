import { useState } from "react";

function LoginForm(){
    const userId = "abcd";
    const password = "1234";
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [message,setMessage] = useState("Please Login");

  function handleSubmit(e){
     e.preventDefault();
     if(userId==user && password==pass){
      setMessage("Login Succesfull");
     } else {
      setMessage("Please Check Credencials");
     }

  }

    return(
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={user} onChange={(e)=> setUser(e.target.value)}></input>
            <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
          <p>{message}</p>
        </div>
    )
}

export default LoginForm;