import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjMoveOver = () => {
  return (
    <div>
      <ProjectHeader name="MoveOver (Android App)"/>
      <ProjectDescription>
        <p>
          IncubateHOU Hackathon, August 6-7, 2016
        </p>
        <p>
          At the IncubateHOU Hackathon hosted by IncubateX, within roughly 24 hours, my team of five developed a pair of Android apps
          designed to server as a secondary siren system to better alert drivers of incoming emergency vehicles and first responders.
          The goal of the application is to partner with car manufacturers as well as local governments in order to create a robust alert
          system to reduce the high rate of emergency vehicle accidents. I developed the client app and worked on the overall UI/UX. We placed
          second in the Houston-area hackathon and fifth in the global IncubateX hackathon.
        </p>
        <ul>
          <li>
            <p>
              <b>Java</b>
            </p>
          </li>
          <li>
            <p>
              <b>Android Studio</b>
            </p>
          </li>
          <li>
            <p>
              <b>FireBase</b> - Used to provide the backend; tracks the locations of the broadcasting vehicles and pushes out alerts to the
              client apps.
            </p>
          </li>
        </ul>
      </ProjectDescription>
      <ProjectFooter type="devpost" link="https://devpost.com/software/move-over"/>
    </div>
  )
};

export default ProjMoveOver;
