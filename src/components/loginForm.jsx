import { useState } from "react";

function LoginForm(){
    const username = "kabeer";
    const password = "Kabeer@123";
    const email = "kabeer@demo.com";

    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [mail,setMail] = useState("");
    const [msg,setMsg] = useState("Please Login");

  function handleSubmit(e){
    e.preventDefault();
    if(user == username && pass == password || mail == email && pass == password){
      setMsg("Welcome to Dashboard");
    } else {
      setMsg("Please check credencials");
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter username/mail" 
        onChange={(e)=> {
        setMail(e.target.value);
        setUser(e.target.value);
      }}>
      </input>
      <input placeholder="Enter Password"
      onChange={(e)=> setPass(e.target.value)}>
      </input>
      <button type="submit">Login</button>
      <h1>{msg}</h1>
    </form>
  )
}

export default LoginForm;