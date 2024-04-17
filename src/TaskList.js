import React from 'react'
import { useDispatch } from 'react-redux';
import { RemoveTodoAction } from './TodoActions';

const TaskList = ({todo}) => {
    
  const dispatch = useDispatch();
  const handleDelete = (t) => {
    dispatch(RemoveTodoAction(t))
  }

  return (
    <div  key={todo.todo} className='list'>
    <span class="col-md-10">{todo.todo}</span>
    <button class={"btn btn-danger col-md-2"}  onClick={()=>handleDelete(todo)}>Delete</button>
  </div>
 
  )
}

export default TaskList