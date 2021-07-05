import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { viewWalkthrough } from './APIFile';
import * as api from './APIFile'

const ViewWalkthrough = ({ activeWalkthrough, setView, view }) => {

    const [error, setError] = useState(false);

    useEffect(() => {
        api.viewWalkthrough(activeWalkthrough, setView, setError);
    }, []);

    if (!view) {
        return null
    }

    console.log(view)

    return (
        <div>
            <h2>{view.title}</h2>
            <h3>Created: {view.date_created}</h3>

            <Carousel interval={null}>
                {view.slide_images.map((image) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt="slide"
                            />
                            <Carousel.Caption>
                                <h3>slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )

                })}
            </Carousel>







            {/* <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default ViewWalkthrough;