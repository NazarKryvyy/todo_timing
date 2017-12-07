var React = require("react");
import * as TodoActions from "Actions";

var FinishedTask = React.createClass({
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
    render: function(){
        const {text, time} = this.props;
        return (
            <li className="row" >               
                <div className="cell large-8">
                    {text}
                </div>
                <div className="cell large-4">
                    {this.formateTime(time)}
                </div>                             
            </li>
           
        )
    }
})

module.exports = FinishedTask;