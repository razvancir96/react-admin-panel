import React from 'react';

function UserItem(props) {
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