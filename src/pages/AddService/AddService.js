import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h2>Please Add a Service</h2>
            <form className='service-form w-50 mx-auto ' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Description' {...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Photo Url' type="text" {...register("img")} />
                <input type="Submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;