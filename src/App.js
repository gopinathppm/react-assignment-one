import React, {Component} from 'react';
import UserInput from './Inputs/UserInput';
import UserOutput from './Inputs/UserOutput';
import './App.css';

class App extends Component {

  state = {
    uname: ["Gopi"]
  }

  changeNameHandler = event => {
    this.setState({
      uname: [event.target.value]
    })
  };
  

  render(){

    return (
      <div className="App">
            <h1>React assignment one</h1>
            <UserInput uname= {this.state.uname[0]} change={this.changeNameHandler} />
            <UserOutput uname = {this.state.uname[0]} > 
                 This is the first assignment in react step to step guide
            </UserOutput>
            {/* <UserOutput uname = {this.state.uname[0]}> 
                This helps you to understand the basics of react and JS
            </UserOutput> */}
      </div>
    ); 
  }
}

export default App;
