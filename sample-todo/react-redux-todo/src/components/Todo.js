import React from 'react';

export default class Todo extends React.Component {
    state ={
        todo:''
    }
    componentDidMount(){
        this.props.getTask_comp();
    }

    render() {
        console.log(this.props)
        const list = this.props.todo_comp.todoList.sort( (a,b) => {
            if(a.TodoID < b.TodoID) return -1;
            if(a.TodoID > b.TodoID) return 1;
            return 0; 
        } ).map( (todo, index) => {
            return ( 
                <tr key={todo.TodoID}>
                    <td className="task">
                        {todo.task}
                    </td>
                    <td className="button">
                        <button onClick={ (elm) => {
                            this.props.dellTodo_comp(todo.TodoID)
                            .then( () =>this.props.getTask_comp() ); 
                        } }>DEL</button>
                    </td>
                </tr>                
        )});

        return (
            <div>
                <div className="todo_form">
                    <input  type="text" onChange={elm => this.setState({todo: elm.target.value})}></input>
                    <button onClick={ ()=> {
                        this.props.addTodo_comp( this.state.todo )
                        .then( () =>this.props.getTask_comp() );
                    } }>追加
                    </button>
                </div>
                <table className="list">
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        );
    }
}