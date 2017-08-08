import React from 'react';
import PropTypes from 'prop-types';

const ProjectsHeader = (props) => {
  return (
    <div className="columns is-centered">
      <h2 className="column is-12-mobile is-8-tablet is-6-desktop"><span>{props.name}</span></h2>
    </div>
  )
};
ProjectsHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default ProjectsHeader;
