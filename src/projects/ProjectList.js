import React from "react";
import PropTypes, { checkPropTypes } from "prop-types";

import { Project } from './Project';

function ProjectList({ projects }) {
    return (
        <div className="row">
            {
                projects.map((project)=>(
                    <div className="card">
                        <img src={project.imageUrl} alt = {project.name} />
                        <section className = "section dark">
                            <strong>{project.name}</strong>
                            <p>{project.description}</p>
                            <p>Budget: {project.budget.toLocaleString()}</p>

                        </section>
                    </div>
                ))
            }
        </div>
    );
}
ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};
export default ProjectList;