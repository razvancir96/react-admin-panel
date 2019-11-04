import React from 'react';
import UserList from './components/UserList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      // Pentru acest curs am renuntat la userii predefiniti. Toti userii sunt veniti din API.
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Vectorul users din state este populat dupa ce ne vin datele de la API.
        this.setState({users: data});
      })
  }

  changeColor = (event) => {
    this.setState({background: event.target.value});
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background}}>
        <h1>HELLO WORLD!</h1>
        {/* Randam o singura data componenta UserList, careia ii trimitem ca proprietati userii din state.
        Atentie, nu trebuie sa omitem sa verificam ca avem useri in state! */}
        { this.state.users
            ? <UserList users={this.state.users}/>
            :null
        }
        <input type="color" onChange={this.changeColor}/>
      </div>
    );
  }
}

export default App;
