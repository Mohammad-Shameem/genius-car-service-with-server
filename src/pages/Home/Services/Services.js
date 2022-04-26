import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/service')   //public theke amra shudhu folder name diye data fetch korbo.
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])   //useEffect er second param ta hocche dependcy list. ei list e jara jara thakbe tara jotobar change hobe useEffect ke totobar call kora hobe.ar joid useEffect ke react render koara somoy ekbar call chai tahole socond param hisebe ekta empty array hobe.ar joid kono second e kono param na deya hoy tahole se infinite taime cholte thakbe ebong ek soymoy  se error khab.

    const [services] = useServices();
    return (
        <div id="services">
            <h1 className='p-3 text-primary'>Our Services</h1>
            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;