import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectsLink = (props) => {
  return (
    <Link to={props.to}>
      {props.children}
      <div className="project-title">{props.text}</div>
    </Link>
  );
};
ProjectsLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
};
export default ProjectsLink;
