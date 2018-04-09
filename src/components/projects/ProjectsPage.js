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
import PageTitle from '../common/PageTitle';

const ProjectsPage = () => {
  let found = false;
  return (
    <div>
    <PageTitle titleId="projectsHeader" titleText="Projects"/>
    <section className="container top-pad">
      {/* <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <h1><span>Projects</span></h1>
        </div>
      </div> */}
      <Route exact path="/projects" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjectsDisplay {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/zerorobotics" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "ZeroRobotics | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjZR {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/findr" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "FindR | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjFindR {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/recyclo" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Recyclo | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjRecyclo {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/moveover" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "MoveOver | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjMoveOver {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/clhsorchestra" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "CLHS Orchestra | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjCLHSOrch {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/polymap" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Polymap | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjPolymap {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/projects/personalwebsite" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Personal Website | Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjPersonalWebsite {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route children={({ ...rest }) => {
        if(!found) document.title = "Error 404 | Projects | Rahul Yesantharao";
        return (
        <PageAnimationWrapper mounted={!found} home={false}>
          <NotFoundPage page="projects" {...rest}/>
        </PageAnimationWrapper>
      );}}/>
    </section>
    </div>
  )
}

export default ProjectsPage;
