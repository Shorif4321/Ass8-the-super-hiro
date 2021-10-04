import React from 'react';
import bannar from '../../images/about.png'
import bannar2 from '../../images/about2.png'
import bannar3 from '../../images/bannar.jpg'

const About = () => {
    return (
        <div>
            <h1 className="fs-1 p-5">About us</h1>
            {/* ============== ielts ============= */}
            <div className="container d-flex justify-content-between">
                <div className="col-md-6 py-3 m-auto ">
                    <h2 className="text-start">Take IELTS with the LanguEasy</h2>
                    <p className="text-start me-2">IELTS is the world’s most popular English language test. If you’re looking to work, study or live abroad then taking an IELTS test can help you make that dream come true.</p>
                </div>

                <div className="col-md-6">
                    <img className="w-100" src={bannar} />
                </div>
            </div>

            <div className="container d-flex justify-content-between">
                {/* ============== sticfaction talk ================ */}
                <div className="col-md-6">
                    <img className="w-100" src={bannar2} />
                </div>
                <div className="col-md-6 py-3 m-auto">
                    <h2 className="text-start  ms-4">Why you admit in our course</h2>
                    <p className="text-start ms-4">WE are belive student suceesss is the main key to success, and we try to provide our best service, our all teachers are very frinedly and helpfu, you can contact wih them easyly at any time</p>
                </div>
            </div>

            <div className="container d-flex justify-content-between">
                {/* ============== service talk ================ */}
                <div className="col-md-6 py-3 m-auto">
                    <h2 className="text-start ">Certify your English proficiency today</h2>
                    <p className="text-start">Take the test online anywhere, anytime—no traveling to a test center or appointment needed</p>
                    <p className="text-start">Get your results within 48 hours of completing the test, and share it with anyone, immediately
                    </p>
                    <p className="text-start">I hope this course will change your life and make a good career
                    </p>

                </div>

                <div className="col-md-6">
                    <img className="w-100" src={bannar3} />

                </div>
            </div>


        </div>
    );
};

export default About;