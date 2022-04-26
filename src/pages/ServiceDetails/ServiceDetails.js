import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Wellcome To Our Service Details Section {service.name}</h2>
            <Link to={"/checkout"}>

                <Button className='bg-dark'>proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;