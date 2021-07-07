import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const SlideEdit = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [newSlide, setNewSlide] = useState({ description: '', image: '', position: '' })

    const handleChange = (event) => {
        setNewSlide({ ...newSlide, [event.target.id]: event.target.value })
    }

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Slide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <label htmlFor="description">Description</label>
                        <input id='description' name='description' type='text' onChange={handleChange} />
                        <label htmlFor="image">Image</label>
                        <input type='file' id='image' name='image' onChange={handleChange} />
                        <label htmlFor="position"></label>
                        <input id='position' name='position' type="integer" />
                        <button type='submit'> Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default SlideEdit;