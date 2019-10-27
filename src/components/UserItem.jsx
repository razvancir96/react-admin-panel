import React from 'react';

const UserItem = function(props) {
    const {name, email} = props;
    return(
        <div>
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    );
}

export default UserItem;