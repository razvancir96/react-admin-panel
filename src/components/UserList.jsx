import React from 'react';
// nu uitai sa importati componentele folosite!
import UserItem from './UserItem';

function UserList(props) {
    // preluam informatiile despre useri
    const { users } = props;

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
    ) 
}

export default UserList;