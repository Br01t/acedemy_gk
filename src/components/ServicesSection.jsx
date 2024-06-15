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
                        <h2 className="mb-5">Services we can offer</h2>
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto obcaecati quidem nulla minima expedita, repellat possimus ipsam delectus eaque nisi harum cumque aperiam atque esse qui sint saepe soluta!</p>
                        <p className="text-start mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto obcaecati quidem nulla minima expedita, repellat possimus ipsam delectus eaque nisi harum cumque aperiam atque esse qui sint saepe soluta!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;