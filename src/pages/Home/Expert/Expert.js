import React from 'react';
import Card from 'react-bootstrap/Card'

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (

        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Expert;