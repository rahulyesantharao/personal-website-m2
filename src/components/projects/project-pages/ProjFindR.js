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
        <p>
          FindR was my first real software project. It is a Chrome extension that gives users full find and replace capabilities
          inside of Google Chrome. It also includes several &#34;bonus&#34; features, such as regular expression support for searching,
          premade options, like &#34;Match Words&#34; or &#34;Match Case&#34;, and, most importantly, the ability to change
          text inside of input fields.
        </p>
        <p>
          HTML5
          CSS3
          JQuery
          <a href="http://zerorobotics.mit.edu/" target="_blank" rel="noopener noreferrer">Material Design Lite</a>
        </p>
      </ProjectDescription>
      <ProjectFooter type="website" link="https://chrome.google.com/webstore/detail/findr/bidnaaogcagbdidehabnjfedabckhdgc"/>
    </div>
  )
};

export default ProjFindR;
