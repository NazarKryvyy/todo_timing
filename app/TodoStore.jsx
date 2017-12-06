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
        edit:true,
        time: 0,
        work: false,
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bills",
        edit:false,
        time: 0,
        work: false,
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
      time: 0,
      work: false,
      complete: false
    });
    this.emit("change");
  }

  timerToggle(id, time){ 
    var currentTask; 
    var work;  
    this.todos.forEach((obj, index)=>{
        if(obj.id === parseInt(id)){
          currentTask = obj;
          obj.work = obj.work ? false : true;          
          work = obj.work;
        }else{
          obj.work = false;
        }
    }); 
    var incrementing = () =>{
        currentTask.time = currentTask.time + 1;
         this.emit("change");
    }   
    if(work){
      clearInterval(timerRuning);
      timerRuning = setInterval(incrementing, 1000);
    }else{
      clearInterval(timerRuning);
      this.emit("change");
    }   
  }

  updateTodo(id,text, edit){
    this.todos.forEach((obj, index)=>{
        if(obj.id ===parseInt(id)){
          obj.text = text;
          obj.edit = edit;
        }
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
            break;
          }
          case 'UPDATE_TODO':{
            this.updateTodo(action.id, action.text, action.edit);
            break;
          }
          case 'TOGLE_TIMER':{
            this.timerToggle(action.time, action.id);
            break;
          }
      }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;

