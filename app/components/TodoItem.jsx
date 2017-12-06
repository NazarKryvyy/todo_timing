var React = require('react');
import * as TodoActions from "Actions";

import Timer from 'Timer';

var TodoItems = React.createClass({

    onTaskChange: function(e){
        var task = this.refs.task.value;
        var id = this.props.id;
        var edit = this.props.edit;
        TodoActions.updateTask(id,task, edit);

    },
    editStatusChange: function(){
        var id = this.props.id;
        var task = this.props.text;
        var edit = this.props.edit ? false : true;
        TodoActions.updateTask(id, task, edit);
    },
    render: function(){
        const { complete, edit, text, id, time, work} = this.props;
        if(edit){
            return <li>
                <div className="task-block">
                  <input value={text} focus="focused" type="text" onChange={this.onTaskChange} ref="task" />
                  <button className="button" onClick={this.editStatusChange}>
                    Save
                  </button>
                </div>
                <Timer time={time} id={id} work={work}/>
                <div className="finish">
                    <button className="button">Finish</button>
                </div>
              </li>;
        }

        return(
            <li>
                <div className="noedit task-block">
                    <span>{text}</span>
                    <button className='button' onClick={this.editStatusChange}>Edit</button>
                </div>   
                <Timer time={time} id={id}  work={work}/>  
                <div className="finish">
                    <button className="button">Finish</button>
                </div>
            </li>
        )
    }
})

module.exports = TodoItems;
