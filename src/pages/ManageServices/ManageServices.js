import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDeleteService = (_id) => {
        const url = `http://localhost:5000/service/${_id}`
        const proceed = window.confirm("Are you sure?")
        if (proceed) {

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== _id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div>
            <h2>Manage Services</h2>
            <div className='service-container'>
                {
                    services.map(service =>
                        <div className='service' key={service._id}>
                            {<img className='img' src={service.img} alt="" />}
                            <h3>{service.name}</h3>
                            <p>price :{service.price}</p>
                            <p><small>{service.description}</small></p>
                            <button onClick={() => handleDeleteService(service._id)} className='btn btn-primary'>Delete Service </button>

                        </div >
                    )
                }
            </div>
        </div>
    );
};

export default ManageServices;