import React from 'react';

const UserItem = function(props) {
    // adaugam un prop nou: isGoldClient - daca e true => afisam mesajul "Client GOLD",
    // altfel nu afisam nimic
    const {name, email, isGoldClient} = props;
    return (
        <div>
            <h2>{ name }</h2>
            <p>{ email }</p>
            {/* pentru a pune o conditie in afisarea elementelor, folosim operatorul ternar */}
            {/* Pentru sintaxa, revizuiti subcapitolul "Operatorul ternar" de la 
            cursul 3 - Randare conditionata*/}
            {/* ATENTIE! Daca pe ramura de else nu avem nimic, punem null*/}
            { isGoldClient // daca isGoldClient are valoare truthy, intra pe prima ramura (dupa ?)
                ? <h3>Client GOLD</h3>
                : null
            }
            {/* PRO Tip: O varinata mai eleganta aici ar fi fost utilizarea unui SHORTHAND
            CIRCUIT (opratorii && sau ||). Topicul e usor mai avansat, dar curiosii pot da un 
            search pe Google :) */}
        </div>
    );
}

export default UserItem;