import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useHistory, useParams } from 'react-router-dom'
import * as api from './APIFile'




const WalkthroughEdit = ({ walkthroughs, setWalkthroughs }) => {
    let history = useHistory()
    let params = useParams()
    const [error, setError] = useState(false)
    const [walkthrough, setWalkthrough] = useState({ title: '', cover_slide: '' })


    const handleDelete = async (event) => {
        event.preventDefault()
        await api.deleteWalkthrough()
        history.push('/walkthroughs')
    }


    return (
        <div>
            <div>
                {walkthroughs.map((walkthrough) => {
                    return (
                        <div>
                            <h2>{walkthrough.title}</h2>
                            <img src={walkthrough.cover_slide} alt="" />
                        </div>
                    )
                })}
            </div>

            <div>
                {/* <form onSubmit={handleWalkthroughCreate}>
                    <label htmlFor="title">Title</label>
                    <input id='title' name='title' type='text' onChange={handleChange} />
                    <label htmlFor="cover_slide">Cover Slide</label>
                    <input type='file' id='cover_slide' name='cover_slide' onChange={handleChange} />
                    <button type='submit'> Submit</button>
                </form> */}

                <button onClick={handleDelete}>Delete Walkthrough</button>
            </div>
        </div>
    );
};

export default WalkthroughEdit;