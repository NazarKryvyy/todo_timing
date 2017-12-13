import React from 'react';
import Nav from'Nav';

export default class Main extends React.Component{
  constructor(props){
    super(props);

  }
  render (){
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="colums medium-6 large-8 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }  
}
// var Main = (props) => {
  
// }



// module.exports = Main;

