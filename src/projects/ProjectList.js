import React from "react";
import PropTypes, { checkPropTypes } from "prop-types";
import { MOCK_PROJECTS } from "./MockProjects";

import { Project } from './Project';

function ProjectList({ project }) {
    return <pre > {JSON.stringify(project, null, ' ')} </pre>;
}

ProjectList.propTypes = {
    project: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;