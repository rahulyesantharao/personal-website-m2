import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjPersonalWebsite = () => {
  return (
    <div>
      <ProjectHeader name="Personal Website"/>
      <ProjectDescription>
        <p>
          Personal Website, July 1-August 15, 2017
        </p>
        <p>
          In the summer of 2017, I decided to rebuild my personal website (see the old one at <a href="http://old.rahulyesantharao.com/" target="_blank" rel="noopener noreferrer">http://old.rahulyesantharao.com</a>)
          using modern web development technologies. I learned and used React with a new development and build stack based on Webpack and NPM scripts
          to rapidly develop and push out the new website.
        </p>
        <ul>
          <li>
            <p>
              <b>ReactJS</b> - Used to implement the view layer of the website.
            </p>
          </li>
          <li>
            <p>
              <b>Webpack</b> - Used to build the website code and bundle and minify all the dependencies.
            </p>
          </li>
          <li>
            <p>
              <b>Visual Studio Code</b>
            </p>
          </li>
          <li>
            <p>
              <b>NodeJS</b>
            </p>
          </li>
          <li>
            <p>
              <b>NPM Scripts</b> - Used to set up scripts to quickly accomplish various tasks, such as linting code, launching the development
              server, and creating the production build.
            </p>
          </li>
        </ul>
      </ProjectDescription>
      <ProjectFooter type="github" link="#"/>
    </div>
  )
};

export default ProjPersonalWebsite;
