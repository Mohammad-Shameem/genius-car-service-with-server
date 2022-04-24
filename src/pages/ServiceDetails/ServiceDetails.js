import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Wellcome To Our Service Details Section {serviceId}</h2>
            <Link to={"/checkout"}>

                <Button className='bg-dark'>proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;