
//put the logic outside the reducer for clean coding 
//as finally actions will give the data for updating the state to reducer 

const TodoReducer = (state = {todos : []},action) => {
  
      switch (action.type) {
        case "ADD_TODO":
            return {todos:action.payload}
            
        case "REMOVE_TODO":
            return {todos:action.payload}
            
        default:
              return state;
      }
  
}

export default TodoReducer