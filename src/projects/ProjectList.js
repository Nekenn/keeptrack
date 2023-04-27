import  ProjectCard  from './ProjectCard'


function ProjectList({ projects }) {
    const items = projects.map(project=>(
        <div key={project.id} className="cols-sm">
            <ProjectCard project = {project}></ProjectCard>
        </div>
    ));
    return <div className="row">{items}</div>
}

export default ProjectList;