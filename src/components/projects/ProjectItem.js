import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = (props) => {
  return (
    <div className="columns is-centered">
      <div className="column is-12-mobile is-2-tablet is-2-desktop">
        <h3>{props.title}</h3>
      </div>
      <div className="column is-12-mobile is-6-tablet is-4-desktop">
        {props.children}
      </div>
    </div>
  )
};
ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default ProjectItem;
