import React, { useEffect, useState } from 'react';
import './Services.css'

/* ==================== data load and dinamiclly show =============*/

const Services = () => {
    const [cousrses, setCourses] = useState([])
    useEffect(() => {
        fetch('./Course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h2 className="p-5">Our Available Courses</h2>
            <div className="cart container pb-5">
                <div className="row ">
                    {
                        cousrses.map(course => <div className="col-md-4 mb-4 course-cart">
                            <div className="course">
                                <img className=" img-fluid" src={course.img} alt="" />
                            </div>
                            <h4 className="mt-4 coure-name ">Course Name: {course.coureName}</h4>
                            <div>
                                <h6>Course Category: {course.category}</h6>
                                <p>Course Time: {course.duration}</p>
                                <h6>Total course Fee: {course.courseFree}</h6>
                                <h6>Lavel: {course.category}</h6>
                            </div>
                            <button className="btn-info rounded mb-3 mt-2 px-3 button-regular"><i class="fas fa-cart-plus"> </i> Buy Now</button>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;