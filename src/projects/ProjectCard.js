import { Project } from "./Project";
import PropTypes from 'prop-types';

function formatDescription(description) {
    return description.substring(0, 60) + '...';
}

function ProjectCard(props) {
    const { project } = props;
    const handleclick = (projectBeingToUpdate) =>{
       console.log(projectBeingToUpdate);
    }
    return (
                   <div className="card">
                        <img src={project.imageUrl} alt = {project.name} />
                        <section className = "section dark">
                            <strong>{project.name}</strong>
                            <p>{formatDescription(project.description)}</p>
                            <p>Budget: {project.budget.toLocaleString()}</p>
			    <button className="bordered">
						<span className="icon-edit"></span>
	    		        edit

	    		    </button>

                        </section>

                    </div>
    );
}

ProjectCard.prototype={
    project:PropTypes.instanceOf(Project).isRequired,
};

export default ProjectCard;
