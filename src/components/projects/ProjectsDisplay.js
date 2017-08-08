import React from 'react';
import {Link} from 'react-router-dom';

const ProjectsDisplay = () => {
  return (
    <div>
      <div className="columns">
        <h2 className="column is-12-mobile is-offset-2-tablet is-4-tablet is-offset-3-desktop is-2-desktop"><Link to="/projects/ZeroRobotics">ZeroRobotics</Link></h2>
        <h2 className="column is-12-mobile is-4-tablet is-2-desktop"><Link to="/projects/FindR">FindR</Link></h2>
        <h2 className="column is-12-mobile is-offset-2-tablet is-4-tablet is-2-desktop"><Link to="/projects/Recyclo">Recyclo</Link></h2>
        <h2 className="column is-12-mobile is-4-tablet is-offset-3-desktop is-2-desktop"><Link to="/projects/MoveOver">MoveOver</Link></h2>
        <h2 className="column is-12-mobile is-offset-2-tablet is-4-tablet is-2-desktop"><Link to="/projects/CLHSOrchestra">CLHS Orchestra Website</Link></h2>
        <h2 className="column is-12-mobile is-4-tablet is-2-desktop"><Link to="/projects/Polymap">Polymap</Link></h2>
        <h2 className="column is-12-mobile is-offset-2-tablet is-4-tablet is-offset-3-desktop is-2-desktop"><Link to="/projects/PersonalWebsite">Personal Website</Link></h2>
      </div>
    </div>
  )
};

export default ProjectsDisplay;
