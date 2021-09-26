import React from 'react';
import './HIred.css'

const Hired = (props) => {
    console.log(props)
    const { name, img, id, age, category, sellary } = props.employe
    return (
        <div className="text-center">
            <div className="card mb-3">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title ">Name: {name}</h5>
                    <div className="d-flex justify-content-evenly">
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">ID: {id}</p>
                    </div>
                    <h6 className="card-title ">Monthly Salary: {sellary}</h6>
                    <h6 className="card-title designation">Designation: {category}</h6>
                    <div className="text-center pb-3">
                        <button onClick={() => props.addToCartHandelar(props.employe)} className="common-button ">
                            <span><i className="fas fa-cart-plus"></i></span> Add to curt</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hired;