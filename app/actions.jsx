import dispatcher from "Dispatcher";

export function createTodo(text){
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    })
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    })
}

export function updateTask(id,text,edit){
    dispatcher.dispatch({
        type: 'UPDATE_TODO',
        text,
        id,
        edit
    });
}

export function timerToggle(id,time){
    dispatcher.dispatch({
        type: 'TOGLE_TIMER',
        time,
        id
    });
}

