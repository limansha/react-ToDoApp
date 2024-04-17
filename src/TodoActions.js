export const AddTodoAction = (todo) => (dispatch,getState) => {
    const {Todo:{todos}} = getState();
    const hasTodo = todos.find(t=>t.todo === todo)
    if(!hasTodo && todo !== ''){
        dispatch({
            type:"ADD_TODO",
            payload:[...todos,{id:todo,todo:todo}]
        })
    }
}

export const RemoveTodoAction = (todo) => (dispatch,getState) => {
    const {Todo:{todos}} = getState();
    const hasTodo = todos.find(t=>t.todo === todo.todo)
    if(hasTodo && todo !== ''){
        dispatch({
            type:"REMOVE_TODO",
            payload:todos.filter(t=>t.id !== todo.id)
        })
    }
}

