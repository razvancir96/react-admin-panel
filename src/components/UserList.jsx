import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;

    return (
        <div>
            {users.map((user, index) => {
                return <UserItem
                    name={user.name}
                    email={user.email}
                    isGoldClient={user.isGoldClient}
                    key={index}
                />
            })}
        </div>
    );
}

export default UserList;