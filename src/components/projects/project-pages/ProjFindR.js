import React from 'react';
import ProjectFooter from '../ProjectFooter';
import ProjectHeader from '../ProjectHeader';
import ProjectDescription from '../ProjectDescription';

const ProjFindR = () => {
  return (
    <div>
      <ProjectHeader name="FindR (Chrome Extension)"/>
      <ProjectDescription>
        <p>
          Personal Project, March-April, 2016
        </p>
        <div className="text">
          <p>
            FindR was my first real software project. It is a Chrome extension that gives users full find and replace capabilities
            inside of Google Chrome. It also includes several &#34;bonus&#34; features, such as regular expression support for searching,
            premade options, like &#34;Match Words&#34; or &#34;Match Case&#34;, and, most importantly, the ability to change
            text inside of input fields.
          </p>
          <p>
            FindR currently has over 1,300 users!
          </p>
        </div>
        <ul>
          <li>
            <p>
              <b>HTML5</b>
            </p>
          </li>
          <li>
            <p>
              <b>CSS3</b>
            </p>
          </li>
          <li>
            <p>
              <b>JQuery</b>
            </p>
          </li>
          <li>
            <p>
              <b><a href="https://getmdl.io/" target="_blank" rel="noopener noreferrer">Material Design Lite</a></b> - I used
              the Material Design Lite framework to provide the extension quick and nice Material Design styles.
            </p>
          </li>
        </ul>
      </ProjectDescription>
      <ProjectFooter type="website" link="https://chrome.google.com/webstore/detail/findr/bidnaaogcagbdidehabnjfedabckhdgc"/>
    </div>
  )
};

export default ProjFindR;
