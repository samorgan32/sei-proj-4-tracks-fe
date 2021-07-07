import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {

    const logout = () => {
        localStorage.clear()
    }

    return (
        <>
            <h1>trail</h1>
            <ul>
                <Link to='/walkthroughs'>Home</Link>
                <Link>My Portfolio</Link>
                <Link>Login</Link>
                <Link to='/login' onClick={logout}>Logout</Link>
            </ul>
        </>
    );
};

export default Nav;