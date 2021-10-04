import React, { useEffect, useState } from 'react';
import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./HomeService.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            {/* ============= heme bannar section =========== */}
            <div className="home-backgroun p-5">
                <div className="container d-flex justify-content-between py-5">
                    <div className="col-md-8 p-4 text-white" >
                        <h6 className="text-start home-details">Welcome to the LanguEasy</h6>
                        <h2 className="fs-1 text-start">You can Learn Your necessary Language from our Expert Teachers</h2>
                        <p className="text-start home-details">Here are a lot of experienced teachers who will help you to teach Engling or another language easily. We are working for our students actively and very politely by our special support and another service </p>
                    </div>
                    <div className=" col-md-4">
                    </div>
                </div>
            </div>

            {/* ============== service section ============= */}
            <div className="services">
                <div className="row mt-5 mb-5">
                    <h2 className="fs-1">Our services</h2>
                    {
                        services.map(service =>
                            <div className="col-md-3 mt-5 mb-5">
                                <div className="cart container">
                                    <div className="logo-image">
                                        <img className="w-100 img-fluid" src={service.img} alt="" />
                                    </div>
                                    <h4 className="mt-4 mb-3 w-75 m-auto service-heading"> {service.coureName}</h4>
                                    <h5 >Price: {service.courseFree}</h5>
                                    <p className="service-details">{service.details}</p>
                                    {/*  <button className="btn-primary rounded mt-3">Show Details</button> */}
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;