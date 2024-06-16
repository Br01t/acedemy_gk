import React from "react";
import Pablo from '../assets/images/pablo.JPG';

function ServicesSection() {
    return (
        <div className="bg-primary text-light py-5" id='services'>
            <div className="container">
                <div className="flex-column-reverse flex-md-row row">
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <img src={Pablo} alt="about image" className="img-fluid w-75 shadow" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-5 text-dark">Services we can offer</h2>
                        <ol className="text-start text-dark">
                            <li><h5><b>Senior Group</b></h5></li>
                                <p>Practice <b>head to head</b> with Malta`s most elite GK`s</p>
                            <li><h5><b>Junior Group</b></h5></li>
                                <p>Pull up your sleeves and <b>dive into our Weekly Training Sessions!</b></p>
                            <li><h5><b>1 on 1 training</b></h5></li>
                                <p>Get coached by a <b>BOV Premier League professional GK</b></p>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
