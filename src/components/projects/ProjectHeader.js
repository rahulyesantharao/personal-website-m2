import React from 'react';
import PropTypes from 'prop-types';

const ProjectsHeader = (props) => {
  return (
    <div className="columns is-centered">
      <div className="column is-12-mobile is-8-tablet is-8-desktop">
        <h2><span>{props.name}</span></h2>
      </div>
    </div>
  )
};
ProjectsHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default ProjectsHeader;
