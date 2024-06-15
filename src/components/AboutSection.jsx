import React from "react";
import AboutImg from '../assets/images/about-img.png';
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
    return (
        <div className="bg-dark text-light py-5" id='about'>
            <div className="container">
                <div className="flex-column-reverse flex-md-row row">
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <img src={AboutImg} alt="about image" className="img-fluid w-75 shadow" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-5">About Me</h2>
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto obcaecati quidem nulla minima expedita, repellat possimus ipsam delectus eaque nisi harum cumque aperiam atque esse qui sint saepe soluta!</p>
                        <p className="text-start mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto obcaecati quidem nulla minima expedita, repellat possimus ipsam delectus eaque nisi harum cumque aperiam atque esse qui sint saepe soluta!</p>
                        <ViewMyWorkBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;