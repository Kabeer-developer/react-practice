import { useState } from "react";

function Todo(){
    const [task,setTask] = useState("");
    const [todos,setTodo]=useState([]);

    function addTodo(){
        if(!task.trim()) return;
        setTodo([...todos,task]);
        setTask("");
    }

    function delTodo(index){
       setTodo(todos.filter((_,i)=> i !== index));
    }
    
    function updTodo(index){
        const temp = todos.filter((_,i)=> i==index);
        
    }

   

    return(
        <div>
           <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}></input>
           <button onClick={()=> addTodo()}>ADD</button>
           {todos.map((todo,i)=> {
            return <li key={i}>{todo} <button onClick={()=> delTodo(i)}>X</button></li>
           })}
        </div>
    )
}

export default Todo;