
const getTask = ( getTask_comp ) =>{
    return {
        type:'GET_TASK',
        payload: { getTask_act: getTask_comp }
    }
}
/*
const addTodo = (todo_comp) => {
    return {
        type: 'ADD_TODO',
        payload: { todo_act: todo_comp }
    }
}

const dellTodo = (dellIndex) => {
    return {
        type: 'DELL_TODO',
        payload: { dellIndex: dellIndex }
    }
}*/

//export { addTodo, dellTodo, getTask }
export { getTask }