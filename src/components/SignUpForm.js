import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as api from './APIFile'

const SignUpForm = ({ user, setUser }) => {
    const [error, setError] = useState(false)

    const handleChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value })
    }

    let history = useHistory()

    const handleSignUp = (event) => {
        event.preventDefault()
        if (user.password === user.confirm) {
            api.signUp(user, setError)
            history.push('/login')
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <div className='form'>
                <form onSubmit={handleSignUp}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' onChange={handleChange} />
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='text' onChange={handleChange} />
                    <label htmlFor='Confirm password'> Confirm Password</label>
                    <input id='confirm' onChange={handleChange} type='text' />
                    <button type='submit' className='submit-button'>
                        submit
                    </button>
                    <p>
                        already have an account? sign in{' '}
                        <Link to='/login'>
                            <span>here</span>
                        </Link>
                        .
                    </p>
                    {error ? (
                        <p>passwords do not match, please check and try again.</p>
                    ) : null}
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;