import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price, _id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            {<img className='img' src={img} alt="" />}
            <h3>{name}</h3>
            <p>price :{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book Service </button>

        </div >
    );
};

export default Service;