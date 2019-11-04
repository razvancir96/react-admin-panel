import React from 'react';
import UserList from './components/UserList';
// importam formularul
import UserAddForm from './components/UserAddForm';
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
        // Inainte de a actualiza state-ul, filtram userii, astfel incat sa ramanem doar cu primii 3.
        data = data.filter(user => user.id < 4);
        // Pentru fiecare user ramas, ii setam valoarea false pentru cheia isGoldClient
        data.forEach(user => {
          user.isGoldClient = false;
        });
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
        <h1>Admin panel - Proiectul 1</h1>
        {/* De ce am inclus componenta UserAddForm in App.js? UserAddForm va modifica state-ul lui App! */}
        <UserAddForm />
        {/* Randam o singura data componenta UserList, careia ii trimitem ca proprietati userii din state.
        Atentie, nu trebuie sa omitem sa verificam daca avem useri in state! */}
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
