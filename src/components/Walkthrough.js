import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const Walkthrough = ({ walkthroughs, setWalkthroughs, setActiveWalkthrough }) => {

    const [error, setError] = useState(false);

    useEffect(() => {
        api.showWalkthroughs(setWalkthroughs, setError);
    }, []);


    function handleClick(event) {
        setActiveWalkthrough(event.target.id)
    }

    function handleEdit(event) {

    }


    console.log(walkthroughs)

    return (
        <div>

            <h1>Walkthroughs</h1>


            {walkthroughs.map((card) => {
                return (
                    <div>


                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.cover_slide} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    Created: {card.date_created}
                                </Card.Text>
                                <Link
                                    to='/walkthroughs/view'
                                    onClick={handleClick}
                                >
                                    <Button id={card.id} variant="primary">View Walkthrough</Button>
                                </Link>
                                <Link to='/walkthroughs/edit'>
                                    <Button>
                                        Edit Walkthrough
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </div>
                )


            })}



        </div>
    );
};

export default Walkthrough;