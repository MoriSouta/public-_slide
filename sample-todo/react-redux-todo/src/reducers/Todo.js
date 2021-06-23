const inisitalState = {
    todoList:[]
}

const todoReducer = ( state = inisitalState, action ) => {
    const newState= Object.assign({},state);
    switch( action.type ) {
        case 'GET_TASK':
            const items = action.payload.getTask_act;
            console.log(items);
            newState.todoList = items;   
            return newState;
/*
        case 'ADD_TODO':
            const todo = action.payload.todo_act;
            console.log(todo);
            newState.todoList.push(todo);   
            return newState;

        case 'DELL_TODO':
            const todoDelIndex = action.payload.dellIndex;
            newState.todoList = newState.todoList.filter( (n,index)=>  index !== todoDelIndex)
            return newState;
*/
        default:
            return state;      
    }
};

export { todoReducer } 