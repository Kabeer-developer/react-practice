import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

 function addTodo(){
  setTodo([...todos,{text : task,completed:false}]);
  setTask("");
 }

 function delTodo(index){
  setTodo(todos.filter((item,i)=> i !== index));
 }
 function toggleTodo(index){
  setTodo(todos.map((item,i)=> i!==index? item : {...item,completed:!item.completed}))
 }

 return(
  <div>
    <input type="text" placeholder="Enter task" onChange={(e)=> setTask(e.target.value)} value={task}></input>
    <button onClick={()=> {addTodo()}}>Add</button>
    <div>
      {todos.map((item,i)=> {
        return <li key={i} 
        style={{textDecoration : item.completed? "line-through": "none"}}>
          {item.text} 
        <button onClick={()=> delTodo(i)}>X</button>
        <button onClick={()=> toggleTodo(i)}>{item.completed?"unmark":"mark"}</button>
        </li>
      })}
    </div>
  </div>
 )

}

export default Todo;
