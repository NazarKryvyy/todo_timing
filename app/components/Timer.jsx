var React = require('react');
import * as TodoActions from "Actions";
import formatTime from 'formatTimer';

var Timer = React.createClass({
    
   getInitialState: function(){
        return {
            inProgress :false,
        }        
    },
    toggleButtonName: function(){
        let currentWork = !this.state.work;
        this.setState({
            inProgress: currentWork
        });
    },
    toggleTimer :function(){
        let {id,time } = this.props;
        TodoActions.timerToggle(time, id);
    },
    onClick :function(){
        // this.toggleButtonName();
        this.toggleTimer();
    },
    render: function(){
        const  { time, inProgress } = this.props;

        let buttonName;
        if(inProgress){
            buttonName = 'Stop'; 
        }else{
            buttonName = 'Start';
        }
        return (            
            <div className="timer">
                <button className="button" onClick={this.onClick}>{buttonName}</button>
                <div className="time-spend">{formatTime(time)}</div>
            </div>
        )        
    }
});

module.exports = Timer;
