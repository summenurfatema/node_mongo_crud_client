import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData()

    const [user, setUser] = useState({})
    const handleSubmit = event => {
        event.preventDefault()
        console.log(user);
        fetch(`http://localhost/5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Information Updated !!!')
                }
            })
    }


    const handleChange = event => {
        const value = event.target.value
        const field = event.target.name
        const newUser = { ...user }
        newUser[field] = value
        setUser(newUser)
    }
    return (

        <div>
            <h3>Please update {storedUser.name}</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} defaultValue={storedUser.name} type='text' name='name' placeholder='name' />
                <br></br>
                <input onChange={handleChange} type='email' name='email' placeholder='email' defaultValue={storedUser.email} />
                <br></br>
                <br></br>
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default Update;