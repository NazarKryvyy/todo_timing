var React = require('react');

var TodoItems = React.createClass({

    onTaskChange: function(e){
        var task = this.refs.task.value;

        if (task.length > 0) {
          this.refs.location.value = "";
          this.props.onSearch(location);
        }
    },

    render: function(){
        const { complete, edit, text } = this.props;

        if(edit){
            return(
                <li>
                    <input value={text} focus="focused" type="text" onChange={this.onTaskChange} ref="task"/>
                </li>
            )
        }

        return(
            <li>
                <span>{text}</span>
            </li>
        )
    }
})

module.exports = TodoItems;
