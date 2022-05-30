import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import travel from '../../image/beach-travel.png';
import './AddNewService.css';
import { Link } from 'react-router-dom';
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
        <div id="addNewService" className="container">
            <div className="row add-service ">
                <div className="col-md-6">
                    <img className='w-100 h-100' src={travel} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 style={{color:'orange'}} className="text-center font-google mb-md-0">Add New Service</h1>
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
            </div>
            <div className="text-center">
                    <Link className='text-decoration-none' to="/home/services#services"><button style={{backgroundColor:'orange'}} className="btn px-5 py-2 ">Go Home</button></Link>
                </div>

        </div>
    );
};

export default AddNewService;