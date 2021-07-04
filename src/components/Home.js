import React, { useState, useEffect } from 'react';
import * as api from './APIFile';

const Home = ({ walkthroughs, setWalkthroughs }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        api.showWalkthroughs(setWalkthroughs, setError);
    }, []);

    console.log(walkthroughs)

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;