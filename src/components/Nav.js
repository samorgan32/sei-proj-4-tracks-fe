import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {

    const logout = () => {
        localStorage.clear()
    }

    return (
        <nav>
            <h1>trail</h1>
            <ul className='navlinks'>
                <li>
                    <Link to='/walkthroughs'>Home</Link>
                </li>
                <li>
                    <Link>My Portfolio</Link>
                </li>
                <li>
                    <Link>Login</Link>
                </li>
                <li>
                    <Link to='/login' onClick={logout}>Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;