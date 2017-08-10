import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjZR = () => {
  return (
    <div>
      <ProjectHeader name="ZeroRobotics 2014 High School International Tournament"/>
      <ProjectDescription>
        <p>
          ZeroRobotics 2014 HS International Tournament, August-January, 2014
        </p>
        <p>
          <a href="http://zerorobotics.mit.edu/" target="_blank" rel="noopener noreferrer">ZeroRobotics</a> is an international programming competition
          run jointly by MIT, NASA, and the ESA. Every year, they host, among others, a high school tournament for students in several countries around
          the world, including USA, Italy, Russia, Mexico, and Australia. In 2014, my team, &#34;Team Lake,&#34; won the International High School
          Tournament. During the finals, our code was run on the actual SPHERES robots aboard the International Space Station.
        </p>
        <ul>
          <li>
            <p>
              <b>C++</b> - Used with the SPHERES API to create state machines for the SPHERES robots to complete the game.
            </p>
          </li>
        </ul>
      </ProjectDescription>
      <ProjectFooter type="website" link="http://zerorobotics.mit.edu/tournaments/16/info/90/0/"/>
    </div>
  )
};

export default ProjZR;
