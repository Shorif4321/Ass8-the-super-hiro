import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hired from '../Hired/Hired';
import './Employe.css'

{/*======== use state ==========*/ }
const Empoye = () => {
    const [employers, setEmployers] = useState([])
    const [cart, setCart] = useState([])

    {/*========  use Effect =========*/ }
    useEffect(() => {
        fetch('./Employe.JSON')
            .then(res => res.json())
            .then(data => setEmployers(data))
    }, []);

    {/*========  Button event handelar =========*/ }
    const addToCartHandelar = (employe) => {
        const newEmploye = [...cart, employe]
        setCart(newEmploye)
    }

    return (
        <div className="d-flex mt-5 ">
            <div className="coustom w-100 container">
                {
                    employers.map(employe => <Hired
                        key={employe.key}
                        employe={employe}
                        addToCartHandelar={addToCartHandelar}
                    ></Hired>)
                }
            </div>
            <div className="w-25 details">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Empoye;