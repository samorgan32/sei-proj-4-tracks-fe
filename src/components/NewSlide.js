import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link, useHistory, useParams } from 'react-router-dom'
import * as api from './APIFile'

const NewSlide = ({ walkthroughDetail }) => {

    // const url = 'http://localhost:8000/'
    const url = 'https://floating-castle-18483.herokuapp.com/'

    const token = localStorage.getItem('token')
    let params = useParams()
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [newSlide, setNewSlide] = useState({ description: '', image: '', position: '', walkthrough: `${params.id}` })
    const [error, setError] = useState(false)

    const handleChange = (event) => {
        setNewSlide({ ...newSlide, [event.target.id]: event.target.value })
    }

    const createNewSlide = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        await api.addSlide(formData, setError)
        setShow(false)
    }



    return (
        <div>

            <div>

                <Button variant="primary" onClick={handleShow}>
                    Create New Slide
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Slide</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={createNewSlide}>
                            <label htmlFor="description">Description</label>
                            <input id='description' name='description' type='text' onChange={handleChange} />
                            <label htmlFor="image">Image</label>
                            <input type='file' id='image' name='image' onChange={handleChange} />
                            <label htmlFor="position">Position</label>
                            <input id='position' name='position' type="text" />
                            <label htmlFor="walkthrough">Walkthrough ID</label>
                            <input id='walkthrough' name='walkthrough' type="text" value={params.id} readOnly='false' />
                            <button type='submit'> Submit</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={createNewSlide}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default NewSlide;