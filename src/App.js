import React from 'react';
// ATENTIE! Nu uitati sa importati componentele create!
import UserList from './components/UserList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // pentru a putea prelucra informatia userilor, trebuie sa le tinem datele in state
    // structura adecvata este un vector de obiecte
    this.state = {
      background: 'white',
      users: [
        {
          name: 'Arsene Florin',
          email: 'arsene.florin@gmail.com',
          isGoldClient: false
        },
        {
          name: 'Criste Mihai',
          email: 'criste.mihai@gmail.com',
          isGoldClient: true
        }
      ]
    };
  }

  changeColor = (event) => {
    this.setState({background: event.target.value});
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background}}>
        <h1>HELLO WORLD!</h1>
        {/* de data asta, avand o lista de useri, ne vom crea comonenta UserList,
        careia ii vom pasa ca props informatiile din state-ul curent */}
        <UserList users={this.state.users}/>
        <input type="color" onChange={this.changeColor}/>
      </div>
    );
  }
}

export default App;
