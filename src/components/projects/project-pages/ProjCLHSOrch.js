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
        <ul>
          <li>
            <p>
              <b>Bootstrap</b> - I used Bootstrap as the front-end framework to provide the basic styling and responsiveness of the website.
              However, I quickly realized that I was overriding almost all the basic Bootstrap styles, essentially using only the grid
              system unchanged, so the majority of the rather large framework was simply a waste of space. I decided only to use it on
              later projects if I needed comprehensive styling and responsive structure in a short amount of time.
            </p>
          </li>
          <li><b>HTML5</b></li>
          <li><b>CSS3</b></li>
          <li>
            <p>
              <b>JQuery</b> - I used JQuery to add some custom functionality outside of the Bootstrap framework; most notably, I made
              page loading wait for the new page and then slide it in from the bottom to make the standard page request/reload less
              noticeable. I also used it to optimize the cover image, starting it as a very small data URI, and only loading in the
              larger cover image after it loaded.
            </p>
          </li>
          <li>
            <p>
              <b>PHP</b> - On the server side, I made all the pages PHP scripts in order to provide some extra functionality. In
              particular, I made the multimedia page automatically load the years and audio files from the file structure in order
              to make updating easier on future orchestra members - they simply have to upload the new music, and the site will
              update itself.
            </p>
          </li>
        </ul>
      </ProjectDescription>
      <ProjectFooter type="website" link="http://lakeorchestra.org/"/>
    </div>
  )
};

export default ProjCLHSOrch;
