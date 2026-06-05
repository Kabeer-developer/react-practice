import { useState } from "react";

function LoginForm(){
    const username = "kabeer";
    const password = "Kabeer@123";
    const email = "kabeer@demo.com";

    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [mail,setMail] = useState("");
    const [message,setMessage] = useState("Please Login");

    function handleSubmit(e){
      e.preventDefault();
      if(username == user && password == pass || email == mail && password == pass){
        setMessage("Login Succesfully");
      } else {
        setMessage("Please check Username and Password");
      }
    }

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=> {setUser(e.target.value),setMail(e.target.value)} } placeholder="username/email"></input>
                    <input type="text" onChange={(e)=> setPass(e.target.value)}></input>
                    <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
    )
}

export default LoginForm;