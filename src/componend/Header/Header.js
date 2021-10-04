import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" header">
            <div className="d-flex justify-content-between container align-items-center">
                {/* ============= webiste Name============= */}
                <div className="text-white ">
                    <h3 className="">LanguEasy
                    </h3>
                </div>
                <div>
                    {/* ============= nav section ============= */}
                    <nav className="">
                        <NavLink className="link-style" to="/home"> Home </NavLink>
                        <NavLink className="link-style" to="/service"> Services </NavLink>
                        <NavLink className="link-style" to="/about"> About </NavLink>
                        <NavLink className="link-style" to="/contact"> Contact us</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;