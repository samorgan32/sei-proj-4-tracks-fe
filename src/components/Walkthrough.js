import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const samples = [
    {
        title: 'react-walkthrough',
        description: 'walkthrough building and setting up a basic react app',
        slideImages: [
            "https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
            'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            "https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60"
        ]
    },
    {
        title: 'Django-walkthrough',
        description: 'walkthrough building and setting up a basic django app',
        slideImages: [
            "https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60",
            "https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
            'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        ]
    },
    {
        title: 'Step-by-Step Heroku Deploy',
        description: 'all the necessary steps for deploying an app to heroku',
        slideImages: [
            'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            "https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60",
            "https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        ]
    }
]

// const title = 'React Walkthrough'

// const description = 'Walkthrough setting up a basic react app'

// const slideImage = ''

const Walkthrough = ({ walkthroughs, setWalkthroughs }) => {

    const [error, setError] = useState(false);

    useEffect(() => {
        api.showWalkthroughs(setWalkthroughs, setError);
    }, []);

    console.log(walkthroughs)

    return (
        <div>

            <h1>Walkthroughs</h1>


            {samples.map((card) => {
                return (
                    <div>


                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.slideImages[0]} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.description}
                                </Card.Text>
                                <Link to='/walkthroughs/view'>
                                    <Button variant="primary">View Walkthrough</Button>
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