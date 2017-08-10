import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const ProjectDescription = (props) => {
  return (
    <div>
      <ProjectItem title="Created">
        {props.children[0]}
      </ProjectItem>
      <ProjectItem title="Description">
        {props.children[1]}
      </ProjectItem>
      <ProjectItem title="Technology">
        {props.children[2]}
      </ProjectItem>
    </div>
  )
};
ProjectDescription.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ProjectDescription;
