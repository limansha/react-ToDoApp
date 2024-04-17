import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css"
import TaskList from "./TaskList";
import { AddTodoAction } from "./TodoActions";
function App() {
  const [todo, setTodo] = useState();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(AddTodoAction(todo))
      setTodo('')
 } 
  const dispatch = useDispatch();
  const Todo = useSelector((state)=>state.Todo);
  const { todos } = Todo;
  
  return (
    <div className="App">
     
<div className="container">
  <h3>ToDO List</h3>
  <p>Schedulle your time here...</p>
  <form className="form-group" onSubmit={handleSubmit}>
  <label for="task">Enter To-do Task :</label>
  <div className="input">
  <input type="text" class="form-control" id="task" value = {todo} onChange={(e)=>{setTodo(e.target.value)}}/>
  <button type="sumbit" class="btn btn-success">Pin Task</button>
  </div>
  </form>
  {todos && todos.map((t)=>(
    <TaskList todo={t} key={t.todo}/>
  ))}
 </div>
 </div>
  );
}

export default App;
