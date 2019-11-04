import React from 'react';

// Observatie: Componenta UserItem a redevenit o componenta declarata cu function
const UserItem = function(props) {
    const {name, email, isGoldClient} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
        </div>
    );
}

export default UserItem;