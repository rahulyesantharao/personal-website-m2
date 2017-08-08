/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import PageAnimationWrapper from '../common/PageAnimationWrapper';
import ProjectsDisplay from './ProjectsDisplay'
import ProjZR from './project-pages/ProjZR';
import ProjFindR from './project-pages/ProjFindR';
import ProjRecyclo from './project-pages/ProjRecyclo';
import ProjMoveOver from './project-pages/ProjMoveOver';
import ProjCLHSOrch from './project-pages/ProjCLHSOrch';
import ProjPolymap from './project-pages/ProjPolymap';
import ProjPersonalWebsite from './project-pages/ProjPersonalWebsite';

const ProjectsPage = () => {
  return (
    <section className="container">
      <div className="columns is-centered">
        <h1 className="column is-12-mobile is-8-tablet is-6-desktop"><span>Projects</span></h1>
      </div>
      <Route exact path="/projects" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Projects">
          <ProjectsDisplay {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/ZeroRobotics" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="ZeroRobotics | Projects">
          <ProjZR {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/FindR" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="FindR | Projects">
          <ProjFindR {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/Recyclo" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Recyclo | Projects">
          <ProjRecyclo {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/MoveOver" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="MoveOver | Projects">
          <ProjMoveOver {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/CLHSOrchestra" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="CLHS Orchestra | Projects">
          <ProjCLHSOrch {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/Polymap" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Polymap | Projects">
          <ProjPolymap {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/PersonalWebsite" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Personal Website | Projects">
          <ProjPersonalWebsite {...rest}/>
        </PageAnimationWrapper>
      )}/>
    </section>
  )
}

export default ProjectsPage;
