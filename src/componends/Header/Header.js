import React from 'react';
import logo from '../../images/free.png'
import './Header.css'


const Header = () => {
    return (
        <div className="main">
            <div className="header container">
                <img className="logo" src={logo} alt="" />

                <nav>
                    <a href="/home">Home</a>
                    <a href="/Contact">Contact us</a>
                    <a href="/about">About us</a>
                    <a href="/hire">Level one</a>
                </nav>
            </div>
            <div className="container ">
                <h2 className="house">House</h2>
            </div>
            <div className="p-3 pb-0 align-center ">
                <div className="container ">
                    <h2 className="title">Get service from the comfort of your home.You can hire a freelancer Budget up to 1000000 </h2>
                </div>
            </div>
        </div>


    );
};

export default Header;