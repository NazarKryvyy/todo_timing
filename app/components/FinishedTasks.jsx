import React from 'react';
import * as TodoActions from "Actions";
import TodoStore from "TodoStore";
import FinishedTask from "FinishedTask";

export default class FinishedTasks extends React.Component{
    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        };
    }
    componentWillMount(){
        TodoStore.on('change', this.getTodos);
    } 
    componentWillUnmount(){
        TodoStore.removeListener('change', this.getTodos);
    }

    getTodos(){
         this.setState({
            todos: TodoStore.getAll(),
        });
    }
    render() {
        const {todos} = this.state;
        const finishedComponents = todos.map((todo)=>{
            if (todo.complete) {
              return <FinishedTask key={todo.id} time={todo.time}  text = {todo.text} {...todo} />;
            }
        });

        return (
           <div>
                <h1 className="text-center page-title">Finished tasks</h1>
                <ul className="finished-list">{finishedComponents}</ul>
            </div> 
        );
    }
};

