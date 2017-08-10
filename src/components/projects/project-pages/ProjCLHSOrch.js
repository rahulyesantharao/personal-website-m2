import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjCLHSOrch = () => {
  return (
    <div>
      <ProjectHeader name="CLHS Orchestra Website"/>
      <ProjectDescription>
        <p>
          Professional Project, May-August, 2016
        </p>
        <p>
          In my junior year, I took on the task of building a new website for the Clear Lake High School orchestra after noticing
          that the current one was severely outdated. I built the site from scratch using Bootstrap and JQuery, but I created a PHP
          script for the multimedia page that will allow later orchestra members to easily update the song listing without ever touching
          code. The website uses modern design to showcase the CLHS Orchestra program.
        </p>
        <p>
          Bootstrap
          HTML5
          CSS3
          JQuery
          PHP
        </p>
      </ProjectDescription>
      <ProjectFooter type="website" link="http://lakeorchestra.org/"/>
    </div>
  )
};

export default ProjCLHSOrch;
