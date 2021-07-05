import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useHistory } from 'react-router-dom'
import * as api from './APIFile'




const WalkthroughEdit = () => {
    let history = useHistory()
    const [error, setError] = useState(false)
    const [walkthrough, setWalkthrough] = useState({ title: '', cover: '' })

    const handleChange = (event) => {
        setWalkthrough({ ...walkthrough, [event.target.id]: event.target.value })
    }

    const handleWalkthroughCreate = async (event) => {
        event.preventDefaut()
        await api.createWalkthrough()
        history.push('/walkthroughs')
    }


    return (
        <div>
            <form onSubmit={handleWalkthroughCreate}>
                <label htmlFor="title">Title</label>
                <input id='title' type='text' onChange={handleChange} />
                <label htmlFor="coverSlide">Cover Slide</label>
                <input type='file' id='cover' onChange={handleChange} />
                <button type='submit'> Submit</button>
            </form>
        </div>
    );
};

export default WalkthroughEdit;