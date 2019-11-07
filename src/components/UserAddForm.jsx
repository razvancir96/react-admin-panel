import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName = (event) => {
        this.setState({name: event.target.value});
    }

    updateEmail = (event) => {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient = (event) => {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={ (event) => this.props.submitAddForm(event, name, email, isGoldClient) }
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={ this.updateName }
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={ this.updateEmail }
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={ this.updateIsGoldClient }
                />

                <input type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;