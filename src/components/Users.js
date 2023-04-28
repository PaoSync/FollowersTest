import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';
import Container from 'react-bootstrap/Container';

const Users = () => {
    const usersList = [
        {
            fullName:  "Miguel Ángel Durán",
            userName:  "midudev", //unique identifier
            userImage: "https://unavatar.io/midudev",
            followed:  true
        },
        {
            fullName:  "Pablo H.",
            userName:  "pheralb", //unique identifier
            userImage: "https://unavatar.io/pheralb",
            followed:  false
        },
        {
            fullName:  "Paco Hdez",
            userName:  "PacoHdezs", //unique identifier
            userImage: "https://unavatar.io/PacoHdezs",
            followed:  true
        },
        {
            fullName:  "Tomas",
            userName:  "TMChein", //unique identifier
            userImage: "https://unavatar.io/TMChein",
            followed:  false
        }
    ];
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(usersList);
    }, []);
    return (
        <div>
            <Container className="users-container">
                {users.map((user, i) => (
                    <SingleUser user={user} position={i} key={user?.userName} setUsers={setUsers} users={users} />
                ))}
            </Container>
        </div>
    );
};

export default Users;