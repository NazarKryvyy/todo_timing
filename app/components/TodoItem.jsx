import React  from 'react';
import * as TodoActions from "Actions";

import Timer from 'Timer';

let curentItemId;
let targetItemId;

var TodoItem = React.createClass({

    onTaskChange: function(e){
        let { id, task, edit, complete, inProgress } = this.props;
        task = this.refs.task.value;
        TodoActions.updateTask(id, task, edit, complete, inProgress);
    },
    editStatusChange: function(){
        let { id, text, edit, complete, inProgress } = this.props;
        edit = edit ? false : true;
        TodoActions.updateTask(id, text, edit, complete, inProgress);
    },
    finishTask: function () {
        let { id, text, edit, complete, inProgress } = this.props;
        complete = true;
        if(inProgress)inProgress = !inProgress;        
        TodoActions.updateTask(id, text, edit, complete, inProgress);
    },
    onDragStart :function(){
        console.log("start");
        let { id } = this.props;
        curentItemId = id;
    },
    drop: function(e){
        e.preventDefault();
        console.log(curentItemId);
        TodoActions.relocateTask(curentItemId, targetItemId);
    },
    onDragOver: function(e){
        e.preventDefault();        
        let {id} = this.props;
        targetItemId = id;
        
    },
    render: function(){
        const { complete, edit, text, id, time, inProgress} = this.props;
        
        if(edit){
            return <li draggable="true" onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDrop={this.drop}>
                <div className="task-block">
                  <input value={text} focus="focused" type="text" onChange={this.onTaskChange} ref="task" />
                  <button className="button" onClick={this.editStatusChange}>
                    Save
                  </button>
                </div>
                <Timer time={time} id={id} inProgress={inProgress} />
                <div className="finish">
                  <button className="button" onClick={this.finishTask}>
                    Finish
                  </button>
                </div>
              </li>;
        }

        return <li draggable="true" onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDrop={this.drop}>
            <div className="noedit task-block">
              <span>{text}</span>
              <button className="button" onClick={this.editStatusChange}>
                Edit
              </button>
            </div>
            <Timer time={time} id={id} inProgress={inProgress} />
            <div className="finish">
              <button className="button" onClick={this.finishTask}>
                Finish
              </button>
            </div>
          </li>;
    }
})

module.exports = TodoItem;
