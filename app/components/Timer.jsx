var React = require('react');
import * as TodoActions from "Actions";

var Timer = React.createClass({
    
//    getInitialState: function(){
//         return {
//             work :false,
//         }        
//     },
    toggleTimer :function(){
        var id = this.props.id;
        var time = this.props.time;
        TodoActions.timerToggle(time, id);
    },
    render: function(){
        const  { time } = this.props;
        // const {work} = this.state;
        // work = work ? false : true;
        // let buttonName;
        // if(work){
        //     buttonName = 'Start'; 
        // }else{
        //     buttonName = 'Stop';
        // }
        return (            
            <div className="timer">
                <button className="button" onClick={this.toggleTimer}>Start</button>
                <div className="time-spend">{time}</div>
            </div>
        )        
    }
});

module.exports = Timer;
