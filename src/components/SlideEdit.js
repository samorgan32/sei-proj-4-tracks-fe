import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import * as api from './APIFile'


const SlideEdit = ({ newSlide }) => {

    const [error, setError] = useState(false)
    const [slideToEdit, setSlideToEdit] = useState('')
    const [slideUpdates, setSlideUpdates] = useState({ description: '', image: '', position: '' })
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        setSlideUpdates({ ...slideUpdates, [event.target.id]: event.target.value })
    }

    const updateSlide = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        await api.editSlide(formData, slideToEdit, slideUpdates, setError)

    }

    const selectSlideToEdit = (event) => {
        setSlideToEdit(event.target.id)
        updateSlide()

    }

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Edit Slide
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Slide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={selectSlideToEdit}>
                        <label htmlFor="description">Description</label>
                        <input id='description' name='description' type='text' onChange={handleChange} />
                        <label htmlFor="image">Image</label>
                        <input type='file' id='image' name='image' onChange={handleChange} />
                        <label htmlFor="position"></label>
                        <input id='position' name='position' type="text" />
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
    )
};

export default SlideEdit;