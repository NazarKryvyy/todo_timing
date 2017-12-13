var  {EventEmitter}  = require('events');
import dispatcher from 'Dispatcher';
var timerRuning;

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 11346,
        text: "Go Shoping",
        edit: false,
        time: 0,
        inProgress: false,
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bills",
        edit: false,
        time: 0,
        inProgress: false,
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      edit: false,
      time: 0,
      inProgress: false,
      complete: false
    });
    this.emit("change");
  }

  timerToggle(id, time) {
    let currentTask;
    let inProgress;
    this.todos.forEach((obj, index) => {
      if (obj.id === parseInt(id)) {
        currentTask = obj;
        obj.inProgress = !obj.inProgress;
        inProgress = obj.inProgress;
      } else {
        obj.inProgress = false;
      }
    });
    this.emit("change");
    let incrementing = () => {
      ++currentTask.time ;
      this.emit("change");
    };
    if (inProgress) {
      clearInterval(timerRuning);
      timerRuning = setInterval(incrementing, 1000);
    } else {
      clearInterval(timerRuning);
      this.emit("change");
    }
  }

  updateTodo(id, text, edit, complete, inProgress) {
    this.todos.forEach((obj, index) => {
      if (obj.id === parseInt(id)) {
        obj.text = text;
        obj.edit = edit;
        obj.complete = complete;
        obj.inProgress = inProgress;
      }
    });
    if(!inProgress){
      clearInterval(timerRuning);
    }
    this.emit("change");
  }

  relocateTask(currentItemId, targetItemId) {
    let currentObj;
    let currentObjIndex;
    let targetObj;
    let targetObjInex;

    this.todos.forEach((obj, index) => {
      if (obj.id === parseInt(currentItemId)) {
        currentObj = obj;
        currentObjIndex = index;
      } 

      if (obj.id === parseInt(targetItemId)) {
        targetObj = obj;
        targetObjInex = index;
      }
    });

    this.todos.splice(currentObjIndex, 1);
    this.todos.splice(targetObjInex, 0, currentObj);
    this.emit("change");

  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "UPDATE_TODO": {
        this.updateTodo(action.id, action.text, action.edit, action.complete, action.inProgress);
        break;
      }
      case "TOGLE_TIMER": {
        this.timerToggle(action.time, action.id);
        break;
      }
      case "RELOCATE_TASK": {
        this.relocateTask(action.currentItemId, action.targetItemId);
        break;
      }
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;

