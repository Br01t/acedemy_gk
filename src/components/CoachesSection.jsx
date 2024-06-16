import React from "react";
import CoachesItems from "../assets/CoachesItems";
import CoachCard from "./CoachCard";

function CoachesSections() {
    return (
        <div className="py-5" id="projects">
            <div className="container">
                <h2 className="mb-5">Coaches</h2>
                <div className="row g-4">
                    {
                        CoachesItems.map((project) => <CoachCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CoachesSections;