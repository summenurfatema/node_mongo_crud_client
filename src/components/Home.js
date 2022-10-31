import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()

    const handleDelete = user => {
        const agree = window.confirm('Are you ready to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully')
                    }
                })
        }
    }
    return (
        <div>
            <h1>Total user : {users.length}</h1>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>{user.name}
                        <button onClick={() => handleDelete(user)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Home;