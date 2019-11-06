import React from 'react';
// Atentie la sintaxa de import a css-ului!
// SI MAI MARE ATENTIE: nu conteaza in ce componenta importi un fisier CSS,
// respectivul fisier va fi vizibil la nivelul intregii aplicatii!!
import './UserAddForm.css';
class UserAddForm extends React.Component {
    // UserAddForm primeste props ca parametru pentru constructor si ii paseaza ca parametru pentru super.
    constructor(props) {
        super(props);
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
        // ATENTIE! Destructuring-ul se face inainte de return! Ne ajuta sa scriem mai putin cand apelam
        // submitAddForm mai jos!
        const {name, email, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                // Ce se intampla la submiterea datelor din formular? Trebuie adaugat un nou user in lista
                // de useri afisata. Unde este instantiata(folosita) componenta care afiseaza userii? In App.js!
                // Deci trebuie ca UserAddForm sa ii trimita datele lui App, pentru ca App sa isi actualizeze state-ul,
                // care este ulterior pasat catre componenta UserListItem.
                // Cum comunica componentele intre ele? De sus in jos. De la parinte la copil. Adica App.js
                // va trimite o functie catre UserAddForm, iar cand functia va fi executata din UserAddForm, va modifca
                // state-ul din App.js! Cum? this e cheia! (SFAT: consultati teoria la partea asta)
                // ALSO: functia submitAddForm va fi apelata doar la submit! (Din nou, teoria e importanta) Si
                // pentru a folosi evenimentul de submit, trebuie pasat ca parametru!
                onSubmit={ (event) => this.props.submitAddForm(event, name, email, isGoldClient) }
            >
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