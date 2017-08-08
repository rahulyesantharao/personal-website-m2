import React from 'react';
import {Link} from 'react-router-dom';

const ProjectsFooter = () => {
  return (
    <div className="columns">
      <h2 className="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop"><Link to="/projects">Back To Projects</Link></h2>
    </div>
  )
};

export default ProjectsFooter;
