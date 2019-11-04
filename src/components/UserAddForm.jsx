import React from 'react';
// Atentie la sintaxa de import a css-ului!
// SI MAI MARE ATENTIE: nu conteaza in ce componenta importi un fisier CSS,
// respectivul fisier va fi vizibil la nivelul intregii aplicatii!!
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor() {
        super();
        // Daca utilizatorul ar da submit la formular, fara sa completeze nimic,
        // acestea ar fi valorile trimise.
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    // NU UITATI ca metodele apelate la declansarea unui event primesc automat ca parametru event-ul respectiv
    updateName = (event) => {
        // practic, in campul din state corespunzator se stocheaza valoarea introdusa de utilizator
        this.setState({name: event.target.value});
    }

    updateEmail = (event) => {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient = (event) => {
        // HINT: Daca nu sunteti siguri ce valoare are o anumita variabila, console.log-ati-o!
        // La checkboxuri event.target.value nu ar fi dat rezultatul dorit, avem nevoie de event.target.checked
        console.log(event.target.checked);
        // ATENTIE! Niciodata sa includeti this.state in interiorul lui this.setState()
        // this.setState({isGoldClient: !this.state.isGoldClient}) NU FACETI ASTA!
        // REPET, NICIODATA NU INCLUDETI THIS.STATE IN THIS.SETSTATE !!!
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        return (
            <form className="user-add-form">
                <h2>Adauga utilizatori:</h2>
                {/* ATENTIE! In JSX, for este pentru structuri repetitive. Pentru for din HTML
                se foloseste htmlFor! */}
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    // Cand utilizatorul va tasta ceva nou, se va declansa eventul onChange.
                    // La declansare, se va executa metoda updateName.
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