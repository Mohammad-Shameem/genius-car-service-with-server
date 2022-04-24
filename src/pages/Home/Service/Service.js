import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = service => {
        navigate(`/service/${service}`)
    }
    return (
        <div className='service'>
            {<img className='img' src={img} alt="" />}
            <h3>{name}</h3>
            <p>price :{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(service.id)} className='btn btn-primary'>Book Service </button>

        </div >
    );
};

export default Service;