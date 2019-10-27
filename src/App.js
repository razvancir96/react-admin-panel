import React from 'react';
import UserItem from './components/UserItem';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white'
    };
  }

  changeColor = (event) => {
    this.setState({background: event.target.value});
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background}}>
        <h1>HELLO WORLD!</h1>
        <UserItem name="Arsene Florin" email="arsene.florin@gmail.com"/>
        <UserItem name="Criste Mihai" email="criste.mihai@gmail.com"/>
        <input type="color" onChange={this.changeColor}/>
      </div>
    );
  }
}

export default App;
