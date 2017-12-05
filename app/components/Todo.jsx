var React = require('react');
var TodoItem = require('TodoItem');
import * as TodoActions from 'Actions';
import TodoStore from 'TodoStore';

console.log(TodoStore);
// window.todoStore = TodoStore;

export default class Todo extends React.Component{
    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentWillMount(){
        TodoStore.on('change', this.getTodos);
        console.log('count', TodoStore.listenerCount('change'));
    } 
    componentWillUnmount(){
        TodoStore.removeListener('change', this.getTodos);
    }

    getTodos(){
         this.setState({
            todos: TodoStore.getAll(),
        });
    }

    createTodo(){
        TodoActions.createTodo(Date.now());
    }


    render(){
        const {todos} = this.state;
        const TodoComponents = todos.map((todo)=>{
            return <TodoItem key={todo.id} edit={todo.edit} {...todo} />;
        })

        return (
            <div>
                <button className="button" onClick={this.createTodo.bind(this)}>Create</button>
                <h1>Todo</h1>
                <ul>{TodoComponents}</ul>
            </div> 
        )
    }
}



// module.exports = Todo;