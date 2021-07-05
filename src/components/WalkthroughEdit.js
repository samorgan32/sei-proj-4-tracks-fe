import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const sample = [
    {
        title: 'react-walkthrough',
        description: 'walkthrough building and setting up a basic react app',
        slideImages: [
            "https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
            'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            "https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU2MDE3fHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60"
        ]
    },
]

const WalkthroughEdit = () => {
    return (
        <div>
            <h3>edit</h3>
        </div>
    );
};

export default WalkthroughEdit;