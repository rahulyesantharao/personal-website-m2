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
import NotFoundPage from '../common/NotFoundPage.js';

const ProjectsPage = () => {
  let found = false;
  return (
    <div>
    <section className="container-fluid" id="projectsHeader">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>Projects</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section className="container top-pad">
      {/* <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <h1><span>Projects</span></h1>
        </div>
      </div> */}
      <Route exact path="/projects" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="Projects">
          <ProjectsDisplay {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/zerorobotics" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="ZeroRobotics | Projects">
          <ProjZR {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/findr" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="FindR | Projects">
          <ProjFindR {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/recyclo" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="Recyclo | Projects">
          <ProjRecyclo {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/moveover" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="MoveOver | Projects">
          <ProjMoveOver {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/clhsorchestra" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="CLHS Orchestra | Projects">
          <ProjCLHSOrch {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/polymap" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="Polymap | Projects">
          <ProjPolymap {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/personalwebsite" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="Personal Website | Projects">
          <ProjPersonalWebsite {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route children={({ ...rest }) => (
        <PageAnimationWrapper mounted={!found} home={false} page="Error 404 (Not Found!)">
          <NotFoundPage projects={true} {...rest}/>
        </PageAnimationWrapper>
      )}/>
    </section>
    </div>
  )
}

export default ProjectsPage;
