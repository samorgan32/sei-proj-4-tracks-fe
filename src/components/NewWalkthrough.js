import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useHistory } from 'react-router-dom'
import * as api from './APIFile'



const NewWalkthrough = () => {
    let history = useHistory()
    const [error, setError] = useState(false)
    const [walkthrough, setWalkthrough] = useState({ title: '', cover_slide: '' })

    const handleChange = (event) => {
        setWalkthrough({ ...walkthrough, [event.target.id]: event.target.value })
    }

    const handleWalkthroughCreate = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(event.target)
        console.log(walkthrough)
        await api.createWalkthrough(formData, setError)
        history.push('/walkthroughs')
    }

    // const handleDelete = async (event) => {
    //     event.preventDefault()
    //     await api.deleteWalkthrough()
    //     history.push('/walkthroughs')
    // }


    return (
        <div>
            <form onSubmit={handleWalkthroughCreate}>
                <label htmlFor="title">Title</label>
                <input id='title' name='title' type='text' onChange={handleChange} />
                <label htmlFor="cover_slide">Cover Slide</label>
                <input type='file' id='cover_slide' name='cover_slide' onChange={handleChange} />
                <button type='submit'> Submit</button>
            </form>

            {/* <button onClick={handleDelete}>Delete Walkthrough</button> */}
        </div>
    );
};

export default NewWalkthrough;