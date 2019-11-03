import React from 'react';
// nu uitai sa importati componentele folosite!
import UserItem from './UserItem';

// ATENTIE! Singurul motiv pentru care am facut componenta UserList sa fie clasa este pentru
// a avea acces la lyfecycle methods. Acestea nu sunt disponibile in cadrul unei componente
// declarate cu function!!
class UserList extends React.Component{
    // ATENTIE! O componenta declarata cu class poate sa nu aiba constructor sau state,
    // dar trebuie neaparta sa aiba metoda render.

    // UNMOUNTING: cand o componenta nu mai trebuie sa fie afisata pe ecran, de cele mai multe
    // ori ea este demontata. In cazul exemplului nostru, daca utilizatorul selecteaza orice alta culoare
    // decat negru, componenta UserList trebuie sa fie afisata pe ecran. ATENTIE! O data ce aceasta componenta
    // este montata, ea ramane montata pana cand este selectata culoarea negru(#000000). Atunci ea este demontata
    // si se apeleaza metoda componentWillUnmount. Cand se reselecteaza o culoare diferita de negru, componenta
    // UserList va fi din nou montata.
    componentWillUnmount() {
        console.log('UserList Component was unmounted...');
    }

    componentDidMount() {
        console.log('UserList component was mounted!');
    }

    render() {
        console.log('UserList component rendered!');
        // preluam informatiile despre useri
        const { users } = this.props;
        return (
            <div>
                {/* ATENTIE! Pe fiecare obiect din vectorul users vrem sa il afisam pe ecran!*/}
                {/* => fiecare obiect va fi transformat intr-un div(sau orice alt tag HTML/JSX) */}
                {/* E foarte util sa intelegeti ca in React fiecare tag de HTML sau componenta JSX
                este reprezentat in spate ca un obiect de JS */}
                {/* Daca vrem sa transformam fiecare element al un array si sa returnam intreg
                array-ul modificat, ce folosim? MAP (vezi recapitulare)*/}
                {users.map((user, index) => {
                    // fiecare obiect de tip user e transformat intr-o componenta UserItem
                    return <UserItem
                        // pasam props-urile corespunzatoare
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                        // ATENTIE! apare in plus acest key: daca nu e pus, va fi afisat un warning
                        // aste foarte important pentru performanta, in randarea repetitva, fiecare
                        // element trebuie sa aiba un idntificator unic
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default UserList;