import React from "react";
import * as TodoActions from "Actions";
import formatTime from 'formatTimer';




export default class FinishedTasks extends React.Component{
    constructor(){
        super();
    }
    render(){
        const {text, time} = this.props;
        return (
            <li className="row" >               
                <div className="cell large-8">
                    {text}
                </div>
                <div className="cell large-4">
                    {formatTime(time)}
                </div>                             
            </li>
           
        )
    }
}
