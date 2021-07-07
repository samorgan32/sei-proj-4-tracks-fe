import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useHistory, useParams } from 'react-router-dom'
import * as api from './APIFile'



const WalkthroughEdit = ({ walkthroughs, setWalkthroughs }) => {
    let history = useHistory()
    let params = useParams()
    const [error, setError] = useState(false)
    const [walkthrough, setWalkthrough] = useState({ title: '', cover_slide: '' })
    const [walkthroughDetail, setWalkthroughDetail] = useState({})

    const url = 'http://localhost:8000/';

    const token = localStorage.getItem('token')


    useEffect(() => {
        api.editWalkthrough(params, setWalkthroughDetail, setError);
    }, []);

    const walkthroughDelete = (history, setError) => {
        fetch(`${url}walkthroughs/${params.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${token}`
            }
        })
            // .then(history.push('/walkthroughs'))
            .catch(() => setError(true))

    }

    const handleChange = (event) => {
        setWalkthrough({ ...walkthrough, [event.target.id]: event.target.value })
    }

    const updateWalkthrough = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        await api.updateWalkthrough(params, formData, walkthrough, setError)

    }

    const handleDelete = (history) => {
        walkthroughDelete()
    }

    return (
        <div>
            <h2>{walkthroughDetail.title}</h2>


            {!walkthroughDetail.slides ? <h2>No SLides Available</h2> : (
                <div>

                    {walkthroughDetail.slides.map((slide) => {
                        return (
                            <div>
                                <h2>{slide.position}</h2>
                                <img src={slide.image} alt="" />
                                <p>{slide.description}</p>
                            </div>
                        )
                    })}

                </div>

            )}

            <div>
                <form onSubmit={updateWalkthrough}>
                    <label htmlFor="title">Title</label>
                    <input id='title' name='title' type='text' onChange={handleChange} />
                    <label htmlFor="cover_slide">Cover Slide</label>
                    <input type='file' id='cover_slide' name='cover_slide' onChange={handleChange} />
                    <button type='submit'> Submit</button>
                </form>

                <button onClick={handleDelete}>Delete Walkthrough</button>
            </div>
        </div>
    );
};

export default WalkthroughEdit;