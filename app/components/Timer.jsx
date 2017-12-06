var React = require('react');
import * as TodoActions from "Actions";

var Timer = React.createClass({
    
   getInitialState: function(){
        return {
            work :false,
        }        
    },
    toggleButtonName: function(){
        var currentWork = this.state.work ? false : true;
        this.setState({
            work: currentWork
        });
    },
    toggleTimer :function(){
        var id = this.props.id;
        var time = this.props.time;
        TodoActions.timerToggle(time, id);
    },
    formateTime: function(time){
        var seconds = time % 60;
        var minutes = Math.floor(time / 60);
        if(seconds< 10){
            seconds = '0' + seconds;
        }
        if(minutes< 10){
            minutes = '0' + minutes;
        }
        return minutes + ":" + seconds;
    },
    onClick :function(){
        // this.toggleButtonName();
        this.toggleTimer();
    },
    render: function(){
        const  { time, work } = this.props;

        // const {work} = this.state;
        let buttonName;
        if(work){
            buttonName = 'Stop'; 
        }else{
            buttonName = 'Start';
        }
        return (            
            <div className="timer">
                <button className="button" onClick={this.onClick}>{buttonName}</button>
                <div className="time-spend">{this.formateTime(time)}</div>
            </div>
        )        
    }
});

module.exports = Timer;
