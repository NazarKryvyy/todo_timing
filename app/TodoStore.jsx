var  {EventEmitter}  = require('events');

import dispatcher from 'Dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 11346,
        text: "Go Shoping",
        edit:true,
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bills",
        edit:false,
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      edit:false,
      complete: false
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }
  
  handleActions(action){
      switch(action.type){
          case 'CREATE_TODO':{
              this.createTodo(action.text);
          }
      }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;

