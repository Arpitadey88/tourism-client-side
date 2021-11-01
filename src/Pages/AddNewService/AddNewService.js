import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddNewService.css';
// import img1 from '../../image/1.jpg';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://ghastly-beast-92427.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div id="addNewService" className="add-service">
            <h1 className="text-center mb-2" style={{ color: 'chocolate' }}>Add New Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("name", { required: true })} placeholder="Title" />
                <input {...register("location")} placeholder="Location" />
                <input {...register("included")} placeholder="Included" />
                <input {...register("duraton")} placeholder="Duration" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("detail")} placeholder="Detail" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddNewService;