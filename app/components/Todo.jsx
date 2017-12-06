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
        let text = this.refs.taskName.value;
        if(text.length >0){
            TodoActions.createTodo(text);
            this.refs.taskName.value ='';
        }   
    }

    render(){
        const {todos} = this.state;
        const TodoComponents = todos.map((todo)=>{
            return <TodoItem key={todo.id} id={todo.id} edit={todo.edit} time={todo.time} {...todo} />;
        })

        return (
            <div>
                <h1 className="text-center page-title">Todo</h1>
                <div className="new-task">
                    <input type="text" placeholder="Enter task" ref="taskName"/>
                    <button className="button" onClick={this.createTodo.bind(this)}>Create</button>
                </div>                
                
                <ul className="todo-list">{TodoComponents}</ul>
            </div> 
        )
    }
}



// module.exports = Todo;