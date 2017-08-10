import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjPolymap = () => {
  return (
    <div>
      <ProjectHeader name="Polymap Android App"/>
      <ProjectDescription>
        <p>
          HomeAway InternHackATX, July 14-16, 2017
        </p>
        <div>
          <p>
            The HomeAway InternHackATX was a hackathon hosted by HomeAway in Austin over the summer of 2017. The problem statement was
            as follows:
          </p>
          <blockquote>
            One of the biggest challenges any online travel platform faces, especially in the vacation rental space, is monthly active or
            even daily active users. How can travel booking companies such as HomeAway and Expedia increase user engagement frequency?
          </blockquote>
          <p>
            Over the course of the roughly 40 hour hackathon, my team of five developed an Android app, Polymap, that allows the user to simply
            point their phone at a landmark and instantaneously receive information about the landmark and a link to learn more. The app also tracks
            the landmarks that the user has visited and creates a map of the route that the user traveled over their journey for them to later export
            or share.
          </p>
        </div>
        <ul>
          <li>
            <p>
              <b>Java</b>
            </p>
          </li>
          <li>
            <p>
              <b>SQLite</b> - Used as a database to store all the locations the user has looked up using the app.
            </p>
          </li>
          <li>
            <p>
              <b>Android Studio</b>
            </p>
          </li>
          <li>
            <p>
              <b>Google Vision API</b> - Used for the image recognition in the app - returns a list of descriptions of the picture
              taken of the landmark.
            </p>
          </li>
          <li>
            <p>
              <b>Google Places API</b> - Used for the place recognition functionality - based on the keywords returned from the Vision API
              and the current location of the user, the Google Places API returns a list of potential options for the landmark. Using this list,
              we determined the most likely match.
            </p>
          </li>
        </ul>
      </ProjectDescription>
      <ProjectFooter type="devpost" link="https://devpost.com/software/polymap-8lrejv"/>
    </div>
  )
};

export default ProjPolymap;
