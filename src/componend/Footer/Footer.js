import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-flex footer text-white">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Course</h5>
                    <li className="li-style">English Language</li>
                    <li className="li-style">Italin Language</li>
                    <li className="li-style">Arabic Language</li>
                    <li className="li-style">Garman Language</li>

                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Browse</h5>
                    <li className="li-style ">Home</li>
                    <li className="li-style">About</li>
                    <li className="li-style">Service</li>
                    <li className="li-style">Others</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Social Link</h5>
                    <div className="text-info">
                        <i class="fs-2  m-2 fab fa-facebook"></i>
                        <i class="fs-2 m-2 fab fa-youtube ms-3"></i>
                        <i class="fs-2  m-2 fab fa-twitter ms-3"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;