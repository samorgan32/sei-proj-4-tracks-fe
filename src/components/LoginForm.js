import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as api from './APIFile'



const LoginForm = ({ user, setUser, setActiveUser }) => {
    const [error, setError] = useState(false)
    let history = useHistory()

    const handleChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value })
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        let data = await api.signIn(user, setError)
        console.log(user)
        if (!data) {
            return null
        } else {
            localStorage.setItem('token', data.auth_token)
            history.push('/walkthroughs')
        }
    }

    return (
        <div>
            <div className='form'>
                <form onSubmit={handleSignIn}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' onChange={handleChange} />
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='text' onChange={handleChange} />
                    <button type='submit' className='submit-button'>
                        submit
                    </button>
                    {error ? (
                        <p>password or email is incorrect, please try again.</p>
                    ) : null}
                    <p>
                        need an account? sign-up{' '}
                        <Link to='/signup'>
                            <span>here</span>
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;