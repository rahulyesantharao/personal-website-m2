import React from 'react';
import {Link} from 'react-router-dom';

const ProjectFooter = () => {
  return (
    <div className="columns is-centered">
      <h2 className="column is-12-mobile is-8-tablet is-6-desktop"><Link to="/projects">Back To Projects</Link></h2>
    </div>
  )
};

export default ProjectFooter;
