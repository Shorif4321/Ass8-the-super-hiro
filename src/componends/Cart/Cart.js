import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let totalSalary = 0;
    for (const employe of cart) {
        totalSalary = totalSalary + employe.sellary
    }

    let person = " ";
    for (const employe of cart) {
        person = person + " " + employe.name
    }
    return (
        <div className="">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title bg-secondary p-2 text-white">Hired Person: {cart.length}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">Total Salarry: {totalSalary}</li>
                        <li className="list-group-item justify-content-center  w-50">Hired person: {person}</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className="buyNow">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;