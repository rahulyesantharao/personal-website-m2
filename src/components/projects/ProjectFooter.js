import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectFooter = (props) => {
  let exploreText = "Check it out!";
  if(props.type==="github") exploreText = "Check out the Github!";
  else if(props.type==="devpost") exploreText = "Check out the Devpost!";

  return (
    <div className="columns is-centered">
      <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
        <p><Link to="/projects">&#8592; Back To Projects</Link></p>
        <p className="is-right"><a href={props.link} target="_blank" rel="noopener noreferrer">{exploreText}</a></p>
      </div>
    </div>
  )
};
ProjectFooter.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
export default ProjectFooter;
