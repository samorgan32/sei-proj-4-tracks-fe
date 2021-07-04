import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const title = 'React Walkthrough'

const description = 'Walkthrough setting up a basic react app'

const slideImage = ''

const Walkthrough = ({ walkthroughs, setWalkthroughs }) => {

    const [error, setError] = useState(false);

    useEffect(() => {
        api.showWalkthroughs(setWalkthroughs, setError);
    }, []);

    console.log(walkthroughs)

    return (
        <div>

            <h1>Walkthroughs</h1>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slideImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to='/walkthroughs/play'>
                        <Button variant="primary">View Walkthrough</Button>
                    </Link>
                    <Button>
                        Edit Walkthrough
                    </Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slideImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">View Walkthrough</Button>
                    <Button>
                        Edit Walkthrough
                    </Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slideImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">View Walkthrough</Button>
                    <Button>
                        Edit Walkthrough
                    </Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Walkthrough;