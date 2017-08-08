import React from 'react';
import {Link} from 'react-router-dom';

const ProjectsDisplay = () => {
  return (
    <div className="columns">
      <h2 className="column is-12-mobile is-offset-2-tablet is-4-tablet is-offset-3-desktop is-2-desktop"><Link to="/projects/project1">Project 1</Link></h2>
      <h2 className="column is-12-mobile is-4-tablet is-2-desktop"><Link to="/projects/project2">Project 2</Link></h2>
      <h2 className="column is-12-mobile is-offset-2-tablet is-4-tablet is-2-desktop"><Link to="/projects/project3">Project 3</Link></h2>
    </div>
  )
};

export default ProjectsDisplay;
