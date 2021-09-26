import React from 'react';
import './Cart.css'

const Cart = (props) => {
    {/*========  distructuring =========*/ }
    const { cart } = props

    let totalSalary = 0;
    for (const employe of cart) {
        totalSalary = totalSalary + employe.sellary
    }

    return (
        <div className="">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title bg-secondary p-2 text-white">Hired Person: {cart.length}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Total Salarry: {totalSalary}</li>
                        <h6 className="mt-1 ms-3">Hired Person Name: </h6>

                        {/*========  Show person name in curt =========*/}

                        {
                            cart.map(person => <div className="ms-3"> {person.name} </div>)
                        }
                    </ul>
                    <div className="card-body text-center">
                        <button className="buyNow"><span><i className="fas fa-cart-plus text-info"></i> </span> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;