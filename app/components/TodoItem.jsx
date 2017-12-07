var React = require('react');
import * as TodoActions from "Actions";

import Timer from 'Timer';

var curentItemId;
var targetItemId;

var TodoItems = React.createClass({

    onTaskChange: function(e){
        let { id, task, edit, complete } = this.props;
        task = this.refs.task.value;
        TodoActions.updateTask(id, task, edit, complete);
    },
    editStatusChange: function(){
        let { id, text, edit, complete } = this.props;
        edit = edit ? false : true;
        TodoActions.updateTask(id, text, edit, complete);
    },
    finishTask: function () {
        let { id, text, edit, complete } = this.props;
        complete = true;
        TodoActions.updateTask(id, text, edit, complete);
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
        const { complete, edit, text, id, time, work} = this.props;
        
        if(edit){
            return <li draggable="true" onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDrop={this.drop}>
                <div className="task-block">
                  <input value={text} focus="focused" type="text" onChange={this.onTaskChange} ref="task" />
                  <button className="button" onClick={this.editStatusChange}>
                    Save
                  </button>
                </div>
                <Timer time={time} id={id} work={work} />
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
            <Timer time={time} id={id} work={work} />
            <div className="finish">
              <button className="button" onClick={this.finishTask}>
                Finish
              </button>
            </div>
          </li>;
    }
})

module.exports = TodoItems;
