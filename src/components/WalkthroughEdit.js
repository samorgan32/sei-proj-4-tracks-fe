import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link, useHistory, useParams } from 'react-router-dom'
import NewSlide from './NewSlide';
import * as api from './APIFile'



const WalkthroughEdit = ({ walkthroughs, setWalkthroughs }) => {
    let history = useHistory()
    let params = useParams()
    const [error, setError] = useState(false)
    const [walkthrough, setWalkthrough] = useState({ title: '', cover_slide: '' })
    const [walkthroughDetail, setWalkthroughDetail] = useState({})
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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


            <NewSlide />
            <div>

                <Button variant="primary" onClick={handleShow}>
                    Edit Walkthrough
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Walkthrough</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={updateWalkthrough}>
                            <label htmlFor="title">Title</label>
                            <input id='title' name='title' type='text' onChange={handleChange} />
                            <label htmlFor="cover_slide">Cover Slide</label>
                            <input type='file' id='cover_slide' name='cover_slide' onChange={handleChange} />
                            <button type='submit'> Submit</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


            {!walkthroughDetail.slides ? <h2>No Slides Available</h2> : (
                <div>

                    {walkthroughDetail.slides.map((slide) => {
                        return (
                            <div>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Slide {slide.position}</Card.Title>
                                        <Card.Img variant="top" src={slide.image} />
                                        <Card.Text>
                                            {slide.description}
                                        </Card.Text>
                                        <Button variant="primary">Edit Slide</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        )
                    })}

                </div>

            )}

            <div>



                <button onClick={handleDelete}>Delete Walkthrough</button>
            </div>
        </div>
    );
};

export default WalkthroughEdit;