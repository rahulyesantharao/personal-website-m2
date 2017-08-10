import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjRecyclo = () => {
  return (
    <div>
      <ProjectHeader name="Recyclo (Website/Game)"/>
      <ProjectDescription>
        <p>
          Clements Inventathon, May 13-14, 2016
        </p>
        <p>
          The Clements Inventathon was my first hackathon-style event, so my team of three developed a relatively simple educational game and website
          designed to teach everyday citizens about recycling and how to properly recycle various types of materials. I was the main website
          developer, and created the website from scratch with the Bootstrap framework and the GSAP framework for JS animation (more details below).
          We placed second overall. See the live website <a href="http://rahulyesantharao.github.io/recyclo/" target="_blank" rel="noopener noreferrer">here</a> or
          check out the Github below.
        </p>
        <p>
          Bootstrap
          GSAP
          JQuery
          HTML5
          CSS3
        </p>
      </ProjectDescription>
      <ProjectFooter type="github" link="https://github.com/rahulyesantharao/recyclo"/>
    </div>
  )
};

export default ProjRecyclo;
