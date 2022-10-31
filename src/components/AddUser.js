import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})
    const handleSubmit = event => {
        event.preventDefault()
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully !!!')
                }
            })
    }
    const handleBlur = event => {
        const value = event.target.value
        const field = event.target.name
        const newUser = { ...user }
        newUser[field] = value
        setUser(newUser)
    }
    return (
        <div>
            Please add new users !!

            <form onSubmit={handleSubmit}>
                <input onBlur={handleBlur} type='text' name='name' placeholder='name' />
                <br></br>
                <input onBlur={handleBlur} type='email' name='email' placeholder='email' />
                <br></br>
                <br></br>
                <button type='submit'>Add User</button>
            </form>


        </div>
    );
};

export default AddUser;